/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
      '10000': '10000ms',
    }},
  },
  plugins: [],
}
