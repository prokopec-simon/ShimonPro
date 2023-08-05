/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { flax: { 400: "#F5DD90", 100: "#FDF9EC" } },
      backgroundImage: {
        overlappingCirclesPattern: "url('/OverlappingCirclesPattern.svg')",
        overlappingCirclesLightPattern:
          "url('/OverlappingCirclesLightPattern.svg')",
      },
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        heading: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
