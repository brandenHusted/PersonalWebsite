// Quiz engine. Loaded on the server only (not served from /public).
// To add a quiz: add an entry to QUIZZES with its questions and a marker,
// then make a brain.js response that is exactly that marker string.

const QUIZZES = {
    security: {
      title: "Security+ scenario quiz",
      marker: "[[START_SECURITY_QUIZ]]",
      topic: /\bsecurity\b/i,
      questions: [
        {
          prompt:
            "Maria in accounts payable gets an email that appears to be from the CEO. It says a confidential acquisition is underway and asks her to wire $48,000 to a new vendor today and tell no one. The sender's address is one letter off from the real CEO's address. Which type of attack is this?",
          options: [
            "Whaling-style business email compromise (BEC)",
            "Smishing",
            "Watering hole attack",
            "Typosquatting via DNS poisoning"
          ],
          answer: 0,
          explanation:
            "This is business email compromise, a targeted phishing variant that impersonates an executive (whaling). The urgency, secrecy, and lookalike address are classic signs. Smishing uses SMS, and a watering hole compromises a site the victims visit."
        },
        {
          prompt:
            "Devon moved from the helpdesk team to the finance team six months ago. An audit finds he can still reset user passwords and access finance records. Which principle was violated, and what is the best fix?",
          options: [
            "Separation of duties; require two approvals for every action",
            "Least privilege; do regular access reviews and remove permissions on role change",
            "Defense in depth; add another firewall layer",
            "Non-repudiation; enable more logging"
          ],
          answer: 1,
          explanation:
            "Devon has accumulated permissions he no longer needs (privilege creep), which violates least privilege. The fix is a process: periodic access recertification and removing access when someone changes roles."
        },
        {
          prompt:
            "At 2:10 AM the SOC sees a workstation showing a ransom note, and EDR shows it starting to scan and connect to file shares on other hosts. According to the incident response lifecycle, what should the analyst do FIRST?",
          options: [
            "Wipe and reimage the workstation",
            "Pay the ransom to prevent data loss",
            "Isolate the workstation from the network to contain the spread",
            "Write the lessons-learned report"
          ],
          answer: 2,
          explanation:
            "The threat is active and spreading, so containment comes first. Isolating the host limits damage and preserves evidence. Eradication and recovery (reimaging) come after containment, and lessons learned comes last."
        },
        {
          prompt:
            "A law firm must email contracts so the recipient can verify the message wasn't altered AND the sender can't later deny sending it. Which solution best meets both requirements?",
          options: [
            "Encrypt the email with a shared symmetric key",
            "Hash the message with SHA-256 and attach the hash",
            "Send the email over TLS",
            "Sign the message with the sender's private key (digital signature)"
          ],
          answer: 3,
          explanation:
            "A digital signature provides integrity and non-repudiation because only the sender holds the private key. A plain hash can be recomputed by anyone, a shared key can't prove who sent it, and TLS only protects transport."
        },
        {
          prompt:
            "A coffee shop chain offers guest Wi-Fi. A pen test shows a laptop on the guest network can reach the point-of-sale (POS) terminals that process credit cards. Which control would BEST reduce this risk?",
          options: [
            "Hide the guest SSID",
            "Segment the network with separate VLANs and firewall rules between guest and POS",
            "Switch the guest network to WEP",
            "Increase the DHCP lease time"
          ],
          answer: 1,
          explanation:
            "Network segmentation keeps the cardholder environment away from untrusted traffic. Hiding an SSID is easy to bypass, WEP is broken, and DHCP lease time has no effect on reachability."
        }
      ]
    },
  
    network: {
      title: "Network+ quiz",
      marker: "[[START_NETWORK_QUIZ]]",
      topic: /\bnetwork\b/i,
      questions: [
        {
          prompt: "Which protocol is used to securely transfer files over the internet?",
          options: ["FTP", "SFTP", "HTTP", "Telnet"],
          answer: 1,
          explanation:
            "SFTP (Secure File Transfer Protocol) is used to securely transfer files over the internet. FTP is not secure, HTTP is for web traffic, and Telnet is for remote access but lacks encryption."
        },
        {
          prompt: "What is the purpose of a subnet mask in networking?",
          options: [
            "To encrypt data",
            "To define the network and host portions of an IP address",
            "To assign IP addresses dynamically",
            "To route traffic between networks"
          ],
          answer: 1,
          explanation:
            "A subnet mask defines the network and host portions of an IP address. It helps determine which part of the address refers to the network and which part refers to the host."
        },
        {
          prompt: "Which device operates at Layer 2 of the OSI model?",
          options: ["Router", "Switch", "Firewall", "Hub"],
          answer: 1,
          explanation:
            "A switch operates at Layer 2 (Data Link Layer) of the OSI model. Routers operate at Layer 3, firewalls can operate at multiple layers, and hubs are Layer 1 devices."
        },
        {
          prompt: "What is the primary purpose of a VLAN?",
          options: [
            "To increase bandwidth",
            "To segment a network logically",
            "To provide internet access",
            "To encrypt network traffic"
          ],
          answer: 1,
          explanation:
            "A VLAN (Virtual Local Area Network) segments a network logically, improving security and reducing broadcast traffic."
        },
        {
          prompt: "Which protocol is used to resolve IP addresses to MAC addresses?",
          options: ["DNS", "ARP", "DHCP", "ICMP"],
          answer: 1,
          explanation:
            "ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses. DNS resolves domain names to IP addresses, DHCP assigns IP addresses, and ICMP is used for diagnostics."
        }
      ]
    }
  };
  
  const LETTERS = ["A", "B", "C", "D"];
  const SESSION_TTL_MS = 60 * 60 * 1000; // 1 hour
  const MAX_SESSIONS = 5000;
  
  // sessionId -> { quiz: "security" | "network", index, score, lastSeen }
  const sessions = new Map();
  
  setInterval(() => {
    const now = Date.now();
    for (const [id, s] of sessions) {
      if (now - s.lastSeen > SESSION_TTL_MS) sessions.delete(id);
    }
  }, 10 * 60 * 1000).unref();
  
  // "[[START_NETWORK_QUIZ]]" -> "network" (or null if it isn't a quiz marker)
  function getQuizForMarker(text) {
    for (const [key, quiz] of Object.entries(QUIZZES)) {
      if (quiz.marker === text) return key;
    }
    return null;
  }
  
  // Detects "quiz" requests directly so we don't depend on brain.js fuzzy matching.
  // "give me a quiz on Network+" -> "network". Returns null if the message names
  // no topic or more than one (then brain.js handles it as usual).
  function detectQuizRequest(text) {
    if (!/\bquiz(zes)?\b/i.test(text)) return null;
    const hits = Object.entries(QUIZZES).filter(([, quiz]) => quiz.topic.test(text));
    return hits.length === 1 ? hits[0][0] : null;
  }
  
  function formatQuestion(quizKey, i) {
    const { questions } = QUIZZES[quizKey];
    const q = questions[i];
    const opts = q.options.map((o, n) => `${LETTERS[n]}) ${o}`).join("\n");
    return `Question ${i + 1} of ${questions.length}:\n${q.prompt}\n\n${opts}\n\nReply with A, B, C, or D.`;
  }
  
  function finalMessage(quizKey, score) {
    const total = QUIZZES[quizKey].questions.length;
    const pct = score / total;
    let note;
    if (pct === 1) note = "Perfect score! Excellent work.";
    else if (pct >= 0.8) note = "Great work! You're in strong shape.";
    else if (pct >= 0.6) note = "Solid start. Review the ones you missed and try again.";
    else note = "Keep studying. Every attempt helps. Try again anytime!";
    return `Quiz complete! You scored ${score} out of ${total}.\n${note}\n\nSay "START SECURITY+ QUIZ" or "START NETWORK+ QUIZ" to try another.`;
  }
  
  const START_RE = /^start\s+(security|network)\s*\+?(\s*quiz)?\.?$/i;
  const QUIT_RE = /^(quit|stop|exit|cancel)(\s+(the\s+)?quiz)?\.?$/i;
  const ANSWER_RE = /^\(?([a-d])\)?[.)]?(\s|$)/i;
  
  function startQuiz(sessionId, quizKey = "security") {
    if (!QUIZZES[quizKey]) return null;
    if (sessions.size >= MAX_SESSIONS) {
      sessions.delete(sessions.keys().next().value); // evict oldest
    }
    sessions.set(sessionId, { quiz: quizKey, index: 0, score: 0, lastSeen: Date.now() });
    const { title, questions } = QUIZZES[quizKey];
    return `Let's begin the ${title}! (${questions.length} questions)\n\n${formatQuestion(quizKey, 0)}`;
  }
  
  /**
   * Returns a reply string if the message belongs to a quiz,
   * or null so the normal chatbot matching can handle it.
   */
  function handleQuiz(sessionId, text) {
    const trimmed = text.trim();
    const state = sessions.get(sessionId);
  
    const start = trimmed.match(START_RE);
    if (start) {
      if (state) {
        return 'You are already taking a quiz. Finish it or say "quit quiz" before starting a new one.';
      }
      return startQuiz(sessionId, start[1].toLowerCase());
    }
  
    if (!state) {
      // No active quiz: start one if the message clearly asks for it,
      // otherwise fall through to the normal chatbot.
      const requested = detectQuizRequest(trimmed);
      return requested ? startQuiz(sessionId, requested) : null;
    }
  
    state.lastSeen = Date.now();
    const { questions } = QUIZZES[state.quiz];
  
    if (QUIT_RE.test(trimmed)) {
      sessions.delete(sessionId);
      return `Quiz ended. You answered ${state.index} of ${questions.length} questions and got ${state.score} right. Say "START SECURITY+ QUIZ" or "START NETWORK+ QUIZ" to start over.`;
    }
  
    const m = trimmed.match(ANSWER_RE);
    if (!m) {
      return `Please answer with A, B, C, or D (or say "quit quiz" to stop).\n\n${formatQuestion(state.quiz, state.index)}`;
    }
  
    const choice = m[1].toUpperCase().charCodeAt(0) - 65;
    const q = questions[state.index];
    const correct = choice === q.answer;
    if (correct) state.score++;
  
    const verdict = correct
      ? "Correct!"
      : `Not quite. The correct answer is ${LETTERS[q.answer]}) ${q.options[q.answer]}`;
    const feedback = `${verdict}\n${q.explanation}`;
  
    state.index++;
  
    if (state.index >= questions.length) {
      const { quiz, score } = state;
      sessions.delete(sessionId);
      return `${feedback}\n\n${finalMessage(quiz, score)}`;
    }
  
    return `${feedback}\n\n${formatQuestion(state.quiz, state.index)}`;
  }
  
  module.exports = { handleQuiz, startQuiz, getQuizForMarker };