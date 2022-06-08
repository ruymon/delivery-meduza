module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#EA1D2C',
      },
      fontFamily: {
        sans: ['Nunito'],
      },
      backgroundImage: {
        'login-ilustration': "url('/assets/food.jpg')",
      },
    },
  },
  plugins: [],
} 
