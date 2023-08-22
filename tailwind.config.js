const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
