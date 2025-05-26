/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        blue: {
          500: "#2b77e7",
        },
        black: {
          500: "#1D2235",
          DEFAULT: "#000",
        },
      },
    },
  },
};
