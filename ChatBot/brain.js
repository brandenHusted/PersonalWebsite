// HAL's brain: routes each question to a specialist "agent" and finds the best answer.
// This file is loaded by Node.js on the server and is NOT served from /public.
//
// Each agent lives in its own file inside ./agents and owns:
//   - a list of { q, a } entries (the questions it knows and its answers)
//   - routing keywords (so Auto mode can pick the right agent)
//   - a "not found" message in that agent's own voice
//
// Two modes:
//   AUTO   (agentId "auto")  HAL scores every agent, then searches all of them,
//                            giving the best-fitting agent a small head start.
//   MANUAL (agentId "programming", "comptia", ...)
//                            Only that agent is searched. If it has nothing but
//                            another agent does, HAL points the user there.

const agentDefinitions = require("./agents");

const AUTO_ID = "auto";
const DEFAULT_AGENT_ID = "general";

// Tuning knobs.
const KEYWORD_THRESHOLD = 0.6;     // 0-1 word-overlap score needed for a keyword match
const SEMANTIC_THRESHOLD = 0.5;    // cosine similarity needed for a meaning match
const ROUTE_BONUS = 0.08;          // head start for the agent Auto mode picked (keyword stage)
const SEMANTIC_ROUTE_BONUS = 0.05; // same idea for the semantic stage

/* =========================================
   TEXT HELPERS
   ========================================= */

// Common words that say nothing about the topic. Ignoring them stops
// "what is a ..." from matching every question that starts the same way.
const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "am",
  "do", "does", "did", "how", "what", "whats", "which", "who", "why",
  "when", "where", "can", "could", "would", "should", "will",
  "you", "your", "yours", "i", "me", "my", "we", "our", "it", "its",
  "this", "that", "of", "to", "in", "on", "for", "and", "or", "with",
  "about", "some", "any", "please", "tell", "give", "between",
  "explain", "describe", "define", "s", "t", "d", "ll", "re", "ve", "m"
]);

// Lowercase and strip punctuation, but keep + and # so "C++", "C#" and
// "Security+" stay meaningful.
function normalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9+#\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Break text into a set of meaningful words.
function tokenize(text) {
  const tokens = normalize(text)
    .split(" ")
    .filter(t => /[a-z0-9]/.test(t) && !STOPWORDS.has(t));

  return new Set(tokens);
}

// Number of single-character edits needed to turn a into b.
function levenshteinDistance(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  let previous = Array.from({ length: b.length + 1 }, (_, j) => j);

  for (let i = 1; i <= a.length; i++) {
    const current = [i];

    for (let j = 1; j <= b.length; j++) {
      current[j] = a[i - 1] === b[j - 1]
        ? previous[j - 1]
        : 1 + Math.min(previous[j - 1], previous[j], current[j - 1]);
    }

    previous = current;
  }

  return previous[b.length];
}

/* =========================================
   AGENT REGISTRY
   ========================================= */

// Turn each agent file into a ready-to-search agent.
function prepareAgent(definition) {
  const seen = new Set();
  const entries = [];

  // Drop repeated questions inside one agent (the first one wins).
  for (const entry of definition.entries) {
    const key = normalize(entry.q);

    if (seen.has(key)) continue;

    seen.add(key);
    entries.push({
      q: entry.q,
      a: entry.a,
      norm: key,
      tokens: tokenize(entry.q)
    });
  }

  return {
    id: definition.id,
    name: definition.name,
    tagline: definition.tagline,
    notFound: definition.notFound,
    // Padded with spaces so " ip " matches the word "ip" but not "ship".
    keywords: definition.keywords.map(k => ` ${normalize(k)} `),
    entries,
    embeddingsPromise: null
  };
}

const registry = agentDefinitions.map(prepareAgent);
const agentsById = new Map();

for (const agent of registry) {
  if (agentsById.has(agent.id) || agent.id === AUTO_ID) {
    throw new Error(`Duplicate or reserved agent id: "${agent.id}"`);
  }

  agentsById.set(agent.id, agent);
}

if (!agentsById.has(DEFAULT_AGENT_ID)) {
  throw new Error(`Missing default agent "${DEFAULT_AGENT_ID}".`);
}

// Public info (safe to send to the browser).
function getAgentInfo() {
  return registry.map(({ id, name, tagline }) => ({ id, name, tagline }));
}

/* =========================================
   AUTO ROUTING
   ========================================= */

// Score every agent by how many of its routing keywords appear in the question.
function rankAgents(text) {
  const padded = ` ${normalize(text)} `;

  return registry
    .map((agent, order) => ({
      agent,
      order,
      score: agent.keywords.filter(k => padded.includes(k)).length
    }))
    .sort((a, b) => b.score - a.score || a.order - b.order);
}

/* =========================================
   MATCHING: KEYWORDS
   ========================================= */

// Word-overlap score from 0 to 1 (a Dice coefficient). Words that differ by one
// typo count as 80% of a match. Only long words get typo tolerance.
function keywordScore(userTokens, entryTokens) {
  if (userTokens.size === 0 || entryTokens.size === 0) return 0;

  let overlap = 0;

  for (const userWord of userTokens) {
    if (entryTokens.has(userWord)) {
      overlap += 1;
      continue;
    }

    if (userWord.length < 4) continue;

    for (const entryWord of entryTokens) {
      if (
        entryWord.length >= 4 &&
        Math.abs(entryWord.length - userWord.length) <= 1 &&
        levenshteinDistance(userWord, entryWord) <= 1
      ) {
        overlap += 0.8;
        break;
      }
    }
  }

  return (2 * overlap) / (userTokens.size + entryTokens.size);
}

function keywordSearch(userTokens, agentList, bonusById) {
  let best = null;

  for (const agent of agentList) {
    const bonus = bonusById[agent.id] || 0;

    agent.entries.forEach((entry, index) => {
      const score = keywordScore(userTokens, entry.tokens);

      if (score < KEYWORD_THRESHOLD) return;

      const adjusted = score + bonus;

      if (!best || adjusted > best.adjusted) {
        best = { agent, index, adjusted };
      }
    });
  }

  return best;
}

/* =========================================
   MATCHING: TYPOS IN THE WHOLE QUESTION
   ========================================= */

function typoSearch(normalizedInput, agentList) {
  if (normalizedInput.length < 4) return null;

  const maxDistance = Math.min(
    8,
    Math.max(2, Math.floor(normalizedInput.length * 0.2))
  );

  let best = null;

  for (const agent of agentList) {
    agent.entries.forEach((entry, index) => {
      if (Math.abs(entry.norm.length - normalizedInput.length) > maxDistance) return;

      const distance = levenshteinDistance(normalizedInput, entry.norm);

      if (distance <= maxDistance && (!best || distance < best.distance)) {
        best = { agent, index, distance };
      }
    });
  }

  return best;
}

/* =========================================
   MATCHING: MEANING (LOCAL SEMANTIC SEARCH)
   ========================================= */

// Uses a local Hugging Face model, so no paid API key is required.
// Embeddings turn questions into numerical vectors so HAL can compare their
// meanings, even when users phrase things differently.

let embeddingPipelinePromise = null;

// Load the text-embedding model once and reuse it.
async function getEmbeddingPipeline() {
  if (!embeddingPipelinePromise) {
    embeddingPipelinePromise = import("@huggingface/transformers")
      .then(({ pipeline }) =>
        pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2")
      )
      .catch(error => {
        embeddingPipelinePromise = null;
        throw error;
      });
  }

  return embeddingPipelinePromise;
}

// Convert text into one normalized vector. Mean pooling combines the model's
// token vectors into one; normalizing lets us compare with a simple dot product.
async function createEmbedding(text) {
  const extractor = await getEmbeddingPipeline();

  const output = await extractor(text, {
    pooling: "mean",
    normalize: true
  });

  return Array.from(output.data);
}

// Calculate and cache the vectors for one agent's questions.
// Reusing the Promise means the work happens once, even if several users ask
// at the same moment.
function getAgentEmbeddings(agent) {
  if (!agent.embeddingsPromise) {
    agent.embeddingsPromise = (async () => {
      const extractor = await getEmbeddingPipeline();
      const vectors = [];
      const batchSize = 16;

      for (let i = 0; i < agent.entries.length; i += batchSize) {
        const batch = agent.entries.slice(i, i + batchSize).map(e => e.q);
        const output = await extractor(batch, {
          pooling: "mean",
          normalize: true
        });

        const vectorSize = output.dims[output.dims.length - 1];

        for (let j = 0; j < batch.length; j++) {
          const start = j * vectorSize;

          vectors.push(Array.from(output.data.slice(start, start + vectorSize)));
        }
      }

      return vectors;
    })().catch(error => {
      agent.embeddingsPromise = null;
      throw error;
    });
  }

  return agent.embeddingsPromise;
}

async function semanticSearch(text, agentList, bonusById) {
  const [queryVector, ...vectorSets] = await Promise.all([
    createEmbedding(text),
    ...agentList.map(getAgentEmbeddings)
  ]);

  let best = null;

  agentList.forEach((agent, agentPosition) => {
    const bonus = bonusById[agent.id] || 0;

    vectorSets[agentPosition].forEach((vector, index) => {
      let score = 0;

      for (let k = 0; k < queryVector.length; k++) {
        score += queryVector[k] * vector[k];
      }

      if (score < SEMANTIC_THRESHOLD) return;

      const adjusted = score + bonus;

      if (!best || adjusted > best.adjusted) {
        best = { agent, index, adjusted };
      }
    });
  });

  return best;
}

/* =========================================
   FIND THE BEST ENTRY
   ========================================= */

// Try the cheap methods first, then fall back to meaning.
async function findBest(text, agentList, bonusById, semanticBonusById) {
  if (agentList.length === 0) return null;

  const userTokens = tokenize(text);

  const keywordHit = keywordSearch(userTokens, agentList, bonusById);

  if (keywordHit) return keywordHit;

  const typoHit = typoSearch(normalize(text), agentList);

  if (typoHit) return typoHit;

  try {
    return await semanticSearch(text, agentList, semanticBonusById);
  } catch (error) {
    console.error("HAL semantic search failed:", error);
    return null;
  }
}

/* =========================================
   SUGGESTIONS
   ========================================= */

// Suggest another question from the same agent.
function getRandomSuggestion(agent, excludeIndex) {
  const count = agent.entries.length;

  if (count === 0) return null;

  let index;
  let attempts = 0;

  do {
    index = Math.floor(Math.random() * count);
    attempts++;
  } while (index === excludeIndex && count > 1 && attempts < 10);

  return agent.entries[index].q;
}

/* =========================================
   MAIN REPLY FUNCTION
   ========================================= */

/**
 * @param {string} userInput
 * @param {{ agentId?: string }} [options]  "auto" (default) or an agent id
 * @returns {Promise<{
 *   agent: { id: string, name: string } | null,
 *   index: number,
 *   response: string | null,
 *   fallback: string,
 *   suggestion: string | null
 * }>}
 */
async function getReply(userInput, options = {}) {
  const text = String(userInput || "").trim();
  const requestedId =
    typeof options.agentId === "string" ? options.agentId.toLowerCase() : AUTO_ID;

  // null means Auto mode (also used for unknown ids).
  const selected = agentsById.get(requestedId) || null;

  const ranked = rankAgents(text);
  const routedAgent = ranked[0].score > 0 ? ranked[0].agent : null;

  let hit = null;
  let redirectTo = null;
  let answeringAgent = selected || routedAgent || agentsById.get(DEFAULT_AGENT_ID);

  if (selected) {
    // MANUAL: search only the chosen agent.
    hit = await findBest(text, [selected], {}, {});

    if (!hit) {
      // Does a different agent know this? If so, point the user there.
      const others = registry.filter(a => a !== selected);
      const other = await findBest(text, others, {}, {});

      if (other) redirectTo = other.agent;
    }
  } else {
    // AUTO: search everyone, giving the best-fitting agent a head start.
    const bonus = routedAgent ? { [routedAgent.id]: ROUTE_BONUS } : {};
    const semanticBonus = routedAgent ? { [routedAgent.id]: SEMANTIC_ROUTE_BONUS } : {};

    hit = await findBest(text, registry, bonus, semanticBonus);
  }

  let response = null;
  let index = -1;

  if (hit) {
    answeringAgent = hit.agent;
    index = hit.index;
    response = hit.agent.entries[hit.index].a;
  } else if (redirectTo) {
    response =
      `That sounds like a question for the ${redirectTo.name} agent. ` +
      `Select it on the agent panel (or choose Auto) and ask again.`;
  }

  // Quiz start markers are handled by the server, so don't attach suggestions.
  const isQuizMarker = typeof response === "string" && response.startsWith("[[START_");

  return {
    agent: { id: answeringAgent.id, name: answeringAgent.name },
    index,
    response,
    fallback: answeringAgent.notFound,
    suggestion: isQuizMarker ? null : getRandomSuggestion(answeringAgent, index)
  };
}

// Optional: load the model and calculate every agent's embeddings at startup so
// the first visitor doesn't wait for it.
async function warmUp() {
  await Promise.all(registry.map(getAgentEmbeddings));
}

module.exports = {
  AUTO_ID,
  getAgentInfo,
  getReply,
  warmUp
};
