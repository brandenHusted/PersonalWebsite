require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const crypto = require("crypto");
const { findMatch, responses } = require("./brain");
const { handleQuiz, startQuiz, getQuizForMarker } = require("./quiz");

const app = express();
const PORT = process.env.PORT || 3000;

// If your host is behind a reverse proxy (Render, Railway, etc.),
// this lets Express/rate-limit identify the original client IP.
app.set("trust proxy", 1);

// Security headers.
app.use(helmet());

// Only accept small JSON requests.
app.use(express.json({ limit: "1kb" }));

// Limit chatbot requests to slow down scraping/abuse.
const askLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again in a minute." }
});

// Optional same-origin protection.
// Set ALLOWED_ORIGIN to real site, for example:
// ALLOWED_ORIGIN=https://www.yourdomain.com
app.use("/api/ask", (req, res, next) => {
  const allowedOrigin = process.env.ALLOWED_ORIGIN;

  if (allowedOrigin) {
    const origin = req.get("Origin");

    // Normal same-origin browser requests may omit Origin.
    if (origin && origin !== allowedOrigin) {
      return res.status(403).json({ error: "Origin not allowed." });
    }
  }

  next();
});

// Give each visitor a random session id (cookie) so the quiz can remember
// their question number and score. No cookie-parser needed.
function getSessionId(req, res) {
  const match = /(?:^|;\s*)sid=([a-f0-9-]{36})/.exec(req.headers.cookie || "");
  if (match) return match[1];

  const id = crypto.randomUUID();
  res.cookie("sid", id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 1000
  });
  return id;
}

app.post("/api/ask", askLimiter, (req, res) => {
  // Never trust the browser. Validate and cap the question server-side.
  if (typeof req.body?.question !== "string") {
    return res.status(400).json({ error: "Question must be text." });
  }

  const text = req.body.question.trim().slice(0, 200);

  if (!text) {
    return res.status(400).json({ error: "Empty question." });
  }

  // Quiz first: handles "START SECURITY+ QUIZ" and answers (A/B/C/D)
  // while a quiz is in progress. Returns null when it isn't a quiz message.
  const quizReply = handleQuiz(getSessionId(req, res), text);
  if (quizReply !== null) {
    return res.json({ answer: quizReply });
  }

  const idx = findMatch(text);

  // If brain.js matched the quiz question, its response is a marker
  // that tells us to start the quiz instead of sending text.
  const quizKey = idx === -1 ? null : getQuizForMarker(responses[idx]);
  if (quizKey) {
    return res.json({ answer: startQuiz(getSessionId(req, res), quizKey) });
  }

  // Only send one answer back. The question/response database
  // stays on the server.
  const answer =
    idx === -1
      ? "I'm sorry, I didn't quite understand. Could you try asking another question?"
      : responses[idx];

  res.json({ answer });
});

// Serve only your public website files.
app.use(express.static(path.join(__dirname, "public"), {
  dotfiles: "deny",
  index: "index.html"
}));

// Don't expose stack traces to visitors.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Chatbot server running on port ${PORT}`);
});
