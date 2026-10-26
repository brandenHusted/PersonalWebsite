
/* HAL Chatbot Server
   Node.js + Express
*/

require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const crypto = require("crypto");

const { getReply } = require("./brain");
const {
  handleQuiz,
  startQuiz,
  getQuizForMarker
} = require("./quiz");

const app = express();
const PORT = process.env.PORT || 3002;

// Configure proxy support for deployment platforms.
app.set("trust proxy", 1);

// Security headers.
app.use(helmet());

// Limit incoming JSON request size.
app.use(express.json({ limit: "1kb" }));

// Rate-limit chatbot requests.
const askLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    error: "Too many requests. Please try again in a minute."
  }
});

// Optional allowed-origin protection.
app.use("/api/ask", (req, res, next) => {
  const allowedOrigin = process.env.ALLOWED_ORIGIN;

  if (allowedOrigin) {
    const origin = req.get("Origin");

    if (origin && origin !== allowedOrigin) {
      return res.status(403).json({
        error: "Origin not allowed."
      });
    }
  }

  next();
});

// Create or retrieve the visitor's quiz session ID.
function getSessionId(req, res) {
  const cookieHeader = req.headers.cookie || "";
  const match = /(?:^|;\s*)sid=([a-f0-9-]{36})/.exec(cookieHeader);

  if (match) {
    return match[1];
  }

  const id = crypto.randomUUID();

  res.cookie("sid", id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 1000
  });

  return id;
}

// Basic health check. Visit http://localhost:3002/api/health
// to verify that the server is responding.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "HAL server is running."
  });
});

// Main chatbot endpoint.
app.post("/api/ask", askLimiter, async (req, res, next) => {
  try {
    // Validate the submitted question.
    if (typeof req.body?.question !== "string") {
      return res.status(400).json({
        error: "Question must be text."
      });
    }

    const text = req.body.question.trim().slice(0, 200);

    if (!text) {
      return res.status(400).json({
        error: "Empty question."
      });
    }

    // Get the visitor's session.
    const sid = getSessionId(req, res);

    // Handle quiz answers and quiz commands first.
    const quizReply = handleQuiz(sid, text);

    if (quizReply !== null) {
      return res.json({ answer: quizReply });
    }

    
    // Read the selected agent from the frontend.
    const requestedAgentId =
      typeof req.body.agentId === "string"
        ? req.body.agentId.toLowerCase()
        : "auto";

    // Pass the selected agent to brain.js. Important for agent to respond correctly.
    const { response, suggestion, fallback } = await getReply(text, {
      agentId: requestedAgentId
    });

    // Start the quiz if a quiz trigger was matched.
    const quizKey =
      response === null ? null : getQuizForMarker(response);

    if (quizKey) {
      return res.json({
        answer: startQuiz(sid, quizKey)
      });
    }

    // Build the chatbot's response.
const baseAnswer =
response ?? fallback ??
"I'm sorry, I didn't quite understand. Could you try asking another question?";

    // Avoid adding a suggestion if none was returned.
    const answer = suggestion
      ? `${baseAnswer}\n\nIf you need help try this: "${suggestion}"`
      : baseAnswer;

    return res.json({
      answer,
      suggestion: suggestion || null
    });
  } catch (error) {
    // Log details in the terminal, not to the website visitor.
    console.error("Error handling /api/ask:", error);

    return res.status(500).json({
      error: "HAL encountered a server error. Check the server terminal."
    });
  }
});

// Serve the website from the public folder.
app.use(
  express.static(path.join(__dirname, "public"), {
    dotfiles: "deny",
    index: "index.html"
  })
);

// Handle unexpected Express errors.
app.use((err, req, res, next) => {
  console.error("Express error:", err);

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({
    error: "Internal server error."
  });
});

// Start the server.
app.listen(PORT, "127.0.0.1", () => {
  console.log(`HAL server running at http://127.0.0.1:${PORT}`);
  console.log(`Health check: http://127.0.0.1:${PORT}/api/health`);
});

