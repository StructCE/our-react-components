/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*[.jsx,.js,.tsx,.ts]",
  ],
  theme: {
    extend: {
      spacing: {
        '105': '105%',
        '5px': '5px',
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        'button-active': 'rgb(32, 32, 32)',
        'button-bg': '#f1f1f1',
        'border-button': '#f1f1f1;',
      },
      margin: {
        '0-5': '0 5px',
      },
    },
  },
  plugins: [],
};
