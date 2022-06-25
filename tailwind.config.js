/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "saltt-100": "#FFF5E4",
        "saltt-200": "#FFEAC1",
        "saltt-300": "#F7D082",
        "saltt-400": "#F3B750",
        saltt: "#DB8C05",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
