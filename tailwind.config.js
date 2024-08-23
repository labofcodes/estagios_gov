/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Lalezar: "Lalezar, system-ui",
      Montserrat: "Montserrat, sans-serif",
    },
    extend: {
      backgroundImage: {
        "bg-estagios_gov": "url('/banners/estagios_gov.webp')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      "blue-crea": {
        500: "#1B225D",
        400: "#394BD3",
      },
      "yellow-crea": '#EBAC34',
    },
  },
  plugins: [require("tailwindcss-animated")],
};
