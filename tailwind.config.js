module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {

    extend: {
      colors: {
        'myCustom': '#b79c7d;',
        'custom-bg': '#a16826;',
        'custom-gray': '#f0f1f5',
        'custom-light-choklet': '#f4ede7',
        'custom-deep-choklet': '#a79687',
        'custom-black': '#333333',
        'custom-nav': '#ebe0cc'
      },
      fontFamily: {

        'customFont': ['Modern Antiqua', 'cursive'],
        'customBold': ['Mochiy Pop One', 'sans-serif']

      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
