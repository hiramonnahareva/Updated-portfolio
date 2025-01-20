/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 

      backgroundImage: {
        bg_dark_gradient: 'linear-gradient(120.37deg, rgba(246, 130, 111, 0.5) 5.43%, rgba(250, 79, 202, 0.5) 85.9%)',
      },  
      backgroundImage: {
        bg_light_gradient: 'linear-gradient(120.37deg, rgba(246, 130, 111, 0.5) 5.43%, rgba(250, 79, 202, 0.5) 85.9%)',
      },  
      backgroundImage: {
        custom_gradient: ' linear-gradient(120.37deg, rgba(246, 130, 111, 0.5) 5.43%, rgba(250, 79, 202, 0.5) 85.9%)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      }
      
    },
  },
  plugins: [],
};                                                                                        
