/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow':'#FCB72B',
        'light-yellow':'#FFF4DF',
        'dark-navy': '#495567',
        'dim-grey': '#939CAA',
        'snow': '#F2F5F9',
        'light-grey': '#E5ECF4',
        'hero-mask': '#2F3B59',
      },
      backgroundImage:{
        'hero': "url(./assets/hero-bg.png)",
        'footer': "url(./assets/footer-bg.png)"
      },

    },
  },
  plugins: [],
}

