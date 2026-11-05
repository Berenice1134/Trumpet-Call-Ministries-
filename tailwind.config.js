/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B2A3A",
        ministry: {
          blue: "#005F7F",
          teal: "#13AECB",
          gold: "#FFD400",
          red: "#0A4059",
          mist: "#F2FAFC",
          sky: "#DDF7FB",
        },
        // Paleta cálida para un tono más humano y conmovedor.
        cream: "#FBF7F1",
        sand: "#F3EADF",
        ember: {
          DEFAULT: "#E07A3F",
          light: "#F4A261",
          dark: "#B95A24",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(11, 42, 58, 0.10)",
        photo: "0 30px 60px -20px rgba(11, 42, 58, 0.45)",
      },
    },
  },
  plugins: [],
};
