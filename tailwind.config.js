/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averta: ["Averta Std", "sans-serif"],
      },
      colors: {
        softYellow: "#F8F0A7",
        greenmusgo: "#91957D",
      },
    },
  },
  plugins: [],
};
