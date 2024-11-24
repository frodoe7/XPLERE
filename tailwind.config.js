/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#29A5A8",
        text: "#2E2762",
      },
    },
    fontFamily: {
      stc: ["STC"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
