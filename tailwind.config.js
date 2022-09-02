/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "timberwolf": "#EADEDA",
        "ejc-red": "#823329",
        "community-middle": "#A1766B",
        "community-end": "#4E4C67",
        "connections-end": "#6B717E",
      },
      lineHeight: {
        '11': '7rem'
      },
    },
  },
  plugins: [],
}
