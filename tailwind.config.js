/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#261b7d",   
        secondary: "#7a0706", 
      },
    },
  },
  plugins: [],
};
