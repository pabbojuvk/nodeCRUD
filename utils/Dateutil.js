
function getCurrentDateISO() {
  return new Date().toISOString(); // e.g., 2025-06-21T12:34:56.789Z
}

function getFormattedDate() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
}

module.exports = {
  getCurrentDateISO,
  getFormattedDate
};
