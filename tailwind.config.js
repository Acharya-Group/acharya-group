/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#261b7d",   
        secondary: "#7a0706", 
      },
       borderColor: {
        primary: "#261b7d",
      },
    },
  },
  plugins: [],
};
