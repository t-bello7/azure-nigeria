/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        clashDisplay: ["clash-display"],
        montserrat: ["montserrat"],
        unicaOne: ["unicaOne"],
      },
      backgroundImage: {
        'jumbotronImg': "url(/src/2023/assets/imgs/jumbotron-bg.png)"
      }
    },
  },
  plugins: [],
};
