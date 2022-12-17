module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        iawriter: 'iA Writer Duo, normal'
      }
    },
    listStyleType: {
      square: 'square',
      decimal: 'decimal'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}