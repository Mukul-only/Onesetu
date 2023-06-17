/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "422px",
        smm: "564px",
      },
      letterSpacing: { xWidest: "0.5rem" },
      boxShadow: {
        btn: "0px 1px 2px 0px #00000026",
        nav: "0px 0.6534940004348755px 46px -3px #1B2E5E26",
        box: " 0px 1.2263309955596924px 2.4526619911193848px 0px #00000026 ",
        card: " 0px 12.595702171325684px 84.5711441040039px 0px #0000000D",
        report: "0px 22.876596450805664px 68.62979125976562px 0px #0000000D",
        "box-5":
          "0px 5.870292663574219px 58.70292663574219px 0px rgba(0, 0, 0, 0.51)",
        exl: "0px 14px 94px 0px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        darkBlue: "#314259",
        fadeBlue: "#00357C40",
        xfadeBlue: "#00357C0D",
        deepBlue: "#282C3F",
        lightBlue: "#ECF2FF",
        cyanY: "#00B8B7",
        grayY: "#6B7280",
        "deepBlue-800": "#314259",
        "Blue-500": "#2F77F1",
        "Purple-500": "#7C6FF5",
        "Purple-600": "#4F479D",
        "Green-500": "rgba(74, 223, 147, 1)",
        "Blue-100": "rgba(160, 195, 255, 0.64)",
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
