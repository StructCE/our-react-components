/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        '1r': '0 0 0 1px',
        '2r': '0 0 0 2px',
        'b': '0.5em 0.5em 10px 1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

