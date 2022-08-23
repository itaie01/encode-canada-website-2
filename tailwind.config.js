/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "timberwolf": "#EADEDA",
        "ejc-red": "#823329",
      },
      lineHeight: {
        '11': '7rem'
      },
    },
  },
  plugins: [],
}
