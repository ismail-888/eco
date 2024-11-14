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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(204,253,255,1) 0%, rgba(48,176,192,1) 26%)',
        'custom-gradient-180': ' linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(148,246,250,1) 0%, rgba(54,187,204,1) 78%)',
        
      },
    },
    screens: {
      xl: { max: "1400px" },
      lg: { max: "1150px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "393px" },
    },
  },
  plugins: [],
}

