/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Azul real profundo y rico para textos principales y bloques de alto impacto.
        ink: "#0A1E3C",
        ministry: {
          blue: "#0284C7",
          teal: "#06B6D4",
          gold: "#F59E0B",
          red: "#E11D48",
          mist: "#F0F9FF",
          sky: "#E0F2FE",
        },
        // Fondos luminosos que hacen destacar las fotografías a todo color.
        cream: "#F8FAFC",
        sand: "#EFF6FF",
        // Acento emocional vibrante (carmesí/coral corazón) para despertar empatía y acción.
        ember: {
          DEFAULT: "#E11D48",
          light: "#FB7185",
          dark: "#BE123C",
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
