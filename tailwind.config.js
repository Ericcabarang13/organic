module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        "hero-bg": "url('/public/images/lunchcopy.jpg')",
        "hero2-bg": "url('/public/images/hero2.jpg')"
      },
    },
    
    fontFamily:{
      rubik:["Rubik, sans-serif"],
      lobster :["Lobster, cursive"],
    },
    container:{
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
