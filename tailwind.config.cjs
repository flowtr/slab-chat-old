const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx", "./index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
