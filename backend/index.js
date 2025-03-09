const express = require("express");
const os = require("os");
const { logRequest, getStats } = require("./rpmTracker");

const app = express();
const PORT = process.env.PORT || 3000;
const CONTAINER_ID = process.env.CONTAINER_ID || os.hostname();

// Middleware to log requests
app.use((req, res, next) => {
  logRequest(CONTAINER_ID);
  next();
});

// Route to display container info
app.get("/", (req, res) => {
  res.send(`Hello from container: ${CONTAINER_ID}`);
});

// Route to fetch request statistics
app.get("/stats", (req, res) => {
  res.json(getStats());
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in container ${CONTAINER_ID}`);
});
