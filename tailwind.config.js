/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#65D6D6",
          700: "#00A5A5",
        },
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
