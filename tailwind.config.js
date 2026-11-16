/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Azul marino profundo del ministerio para textos principales y bloques de alto impacto.
        ink: "#0A1E3C",
        ministry: {
          navy: "#0A1E3C",
          blue: "#0284C7",
          teal: "#06B6D4",
          gold: "#F59E0B",
          yellow: "#FACC15",
          mist: "#F0F9FF",
          sky: "#E0F2FE",
        },
        // Fondos luminosos en tonos azul cielo muy suave.
        cream: "#F8FAFC",
        sand: "#E0F2FE",
        // Acentos principales mapeados a la paleta oficial (azul cielo, amarillo y azul marino).
        ember: {
          DEFAULT: "#0284C7",
          light: "#FACC15",
          dark: "#0369A1",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -12px rgba(10, 30, 60, 0.12)",
        photo: "0 28px 60px -15px rgba(10, 30, 60, 0.32)",
      },
    },
  },
  plugins: [],
};
