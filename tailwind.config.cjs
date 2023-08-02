/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: { colors: { flax: { 400: "#F5DD90", 100: "#FDF9EC" } } },
    container: {
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
