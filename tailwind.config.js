/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blood: "rgb(var(--blood-red) / <alpha-value>)",
      black: "rgb(0, 0, 0 / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        sans: ['"Public Sans", sans-serif'],
      },
    },
  },
  plugins: [],
};
