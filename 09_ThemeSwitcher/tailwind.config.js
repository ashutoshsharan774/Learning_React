/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",//ye jo functionality jo html se aati h ye enable krne ke liye darkmode : we get 2 properties on basis of media and on basis of class and we chose class
  theme: {
    extend: {},
  },
  plugins: [],
}

