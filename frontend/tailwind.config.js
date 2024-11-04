/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBlue:'#30b0c0',
        txtGray:"#4c4c4c",
      }
    },
  },
  plugins: [],
}

