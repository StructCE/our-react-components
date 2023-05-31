/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*[.jsx,.js,.tsx,.ts]",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.arrow-offset': {
          '--arrow-offset': '5%',
          marginLeft: 'var(--arrow-offset)',
          marginRight: 'var(--arrow-offset)',
        },
      }, ['responsive']);
    },
  ],
};
