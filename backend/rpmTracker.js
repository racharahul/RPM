const requestCounts = {}; // Store requests per container

function logRequest(containerId) {
  const now = Date.now();
  if (!requestCounts[containerId]) {
    requestCounts[containerId] = [];
  }
  requestCounts[containerId].push(now);

  // Remove old requests beyond 1 minute
  requestCounts[containerId] = requestCounts[containerId].filter(
    (timestamp) => now - timestamp <= 60000
  );
}

function getStats() {
  const stats = {};
  for (const containerId in requestCounts) {
    stats[containerId] = requestCounts[containerId].length; // Count requests in last minute
  }
  return stats;
}

module.exports = { logRequest, getStats };
