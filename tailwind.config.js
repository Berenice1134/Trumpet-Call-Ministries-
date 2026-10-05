/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04384D",
        ministry: {
          blue: "#005F7F",
          teal: "#13AECB",
          gold: "#FFD400",
          red: "#0A4059",
          mist: "#F2FAFC",
          sky: "#DDF7FB",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(4, 56, 77, 0.12)",
      },
    },
  },
  plugins: [],
};
