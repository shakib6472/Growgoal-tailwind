const { twMerge } = require('tailwind-merge');

// Create a short alias for twMerge
function tm(...classes) {
  return twMerge(...classes);
}

module.exports = tm;
