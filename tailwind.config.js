/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
			'sm': '640px',   
			'md': '768px', 
			'lg': '1024px',
			'xl': '1280px', 
			
			'2xln': { max: "1535px" },
			// => @media (max-width: 1535px) { ... }
			
			'xln': { max: "1279px" },
			// => @media (max-width: 1279px) { ... }
			
			'lgn': { max: "1023px" },
			// => @media (max-width: 1023px) { ... }
			
			'mdn': { max: "767px" },
			// => @media (max-width: 767px) { ... }
			
			'smn': { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
    extend: {},
  },
  plugins: [],
}

