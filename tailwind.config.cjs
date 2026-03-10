/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ee2b8c",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "background-light": "#87ceeb", // Minecraft sky blue
        "mc-gray": "#c6c6c6",
        "mc-dark-gray": "#555555",
        "mc-light-gray": "#ffffff",
        "mc-dirt": "#866043",
        "mc-grass": "#7db23e",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
