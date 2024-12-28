import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "serif"],
        raleway: ["Raleway", "serif"],
      },

      colors: {
        raisin_black: "#242222",
        dark_sienna: "#331A15",
        eerie_black: "#1B1A1A",
        davys_grey: "#5C5B5B",
        middle_yellow_red: "#E3B577",
        cultured: "#F5F4F1",
        alabaster: "#ECEAE3",
        charcoal: "#374151",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
