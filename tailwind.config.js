/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#010026',
        blue: '#2CBCE9',
        teal: '#51C6F0',
        yellow: '#FFD700',
        pale: '#FFEAAF',
        purple: '#A545A8',
        grey: '#808080',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)'
      },

      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(90.66deg, #00B5EE 50%, #DDE084 50.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)'
      }),
      fontFamily: {
        shantell: ['Shantell Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      content: {
        brush: 'url(./assets/brush.png)'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: []
};
