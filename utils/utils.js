/**
 * Handles user input to prevent injection attacks
 * @param {string} input - The user input to sanitize
 * @returns {string} - The input string
 */
const handleInput = (input) => {
  if (!input || typeof input !== 'string') return '';

  // Remove special characters
  return input
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ');
};

export { handleInput };