/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: { xWidest: "0.5rem" },
      boxShadow: {
        btn: "0px 1px 2px 0px #00000026",
        nav: "0px 0.6534940004348755px 46px -3px #1B2E5E26 ",
        box: " 0px 1.2263309955596924px 2.4526619911193848px 0px #00000026 ",
        card: " 0px 12.595702171325684px 84.5711441040039px 0px #0000000D",
      },
      colors: {
        darkBlue: "#00357C",
        fadeBlue: "##00357C40",
        deepBlue: "#282C3F",
        lightBlue: "#ECF2FF",
        cyanY: "#00B8B7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
