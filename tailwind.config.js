module.exports = {
  purge: {
    enabled: true,
    content: [
      'html/*.html'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
      },
      animation: {
      }
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus']
    },
  },
  plugins: [],
}
