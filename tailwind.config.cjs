/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        "sm-0":"480px",
        "sm": '570px',
        "md": '768px',
        "md-2":'900px',
        "lg": '996px',
        "lg-2":'1200px',
        "xl": '1440px',
      },
      gridTemplateRows:{
        "28":"repeat(28, minmax (0,50px))",
        "30":"repeat(30, minmax (0,50px))",
        "31":"repeat(31, minmax (0,50px))",
      },
      boxShadow:{
        "card":"0 5px 15px rgba(0,0,0,0.35)"
      }
    },
  },
  plugins: [],
}
