/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans", sans-serif'],
      },
      fontSize: {
        "3xl": "1.875rem",
        "4xl": "2.625rem",
      },
      colors: {
        blood: "rgb(230, 35, 49)",
        lightGrey: "rgb(230,230,230)",
      },
      boxShadow: {
        checkbox: "inset 1em 1em rgb(230, 35, 49)",
      },
    },
  },
  plugins: [],
};
