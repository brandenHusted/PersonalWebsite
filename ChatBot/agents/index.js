// Registry of every agent HAL can use.
// To add a new agent: create agents/yourAgent.js (copy an existing one),
// add it to this list, and add a button for it in index.html.

module.exports = [
  require("./general"),
  require("./programming"),
  require("./comptia"),
  require("./career"),
  require("./branden")
];
