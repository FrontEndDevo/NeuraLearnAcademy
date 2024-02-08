/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#0A2E87",
          700: "#0A48E0",
        },
        secondary: {
          500: "#65D6D6",
          700: "#00A5A5",
        },
      },
    },

    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
