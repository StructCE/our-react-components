/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*[.jsx,.js,.tsx,.ts]"],
  theme: {
    extend: {
      colors: {
        "primary-100": "rgb(32, 32, 32)",
        "primary-500": "#f1f1f1",
      },
    },
  },
  plugins: [],
};
