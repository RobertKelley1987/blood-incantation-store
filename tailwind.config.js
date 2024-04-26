/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blood: "rgb(var(--blood-red))",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ['"Public Sans", sans-serif'],
      },
    },
  },
  plugins: [],
};
