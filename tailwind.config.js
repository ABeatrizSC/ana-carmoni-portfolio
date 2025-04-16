/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        geistMono: ["Geist Mono", "monospace"]
     },
     fontSize: {
      'xxs': '0.725rem', 
      'xs': '0.85rem',   
      'sm': '1rem',  
      'base': '1.2rem',    
      'lg': '1.25rem',  
      'xl': '1.5rem',   
      '2xl': '2rem',   
      '3xl': '2.5rem', 
      '4xl': '3rem',  
      '5xl': '4rem',     
    },
    backgroundColor: {
      'primary-color': '#0A0A0A',
      'secondary-color': '#6b03f4',
      'secondary-color-hover': '#281148',
      'third-color': '#1F1F1F'
    },
    boxShadow: { 
      'secondary-color': 'inset 0 2px 4px #6b03f4'
    },
    colors: {
      'primary-color': '#0A0A0A',
      'secondary-color': '#6b03f4',
      'secondary-color-hover': '#281148',
      'third-color': '#1F1F1F',
      'gradient-rainbow': 'linear-gradient(90deg,#6b03f4, #c03a7e)'
    },
    backgroundImage: {
      'gradient-rainbow': 'linear-gradient(90deg,#6b03f4, #c03a7e)',
    }
    },
  },
  plugins: [],
}