module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "section-2":
          "url('./assets/young-graphic-designer-working-in-office.jpg')",
        "section-img":
          "url('./assets/young-male-designer-using-graphics-tablet-while-working-with-com.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#A4D076",
        secondary: "#EEEFD1",
        "primary-light": "#D7EFB5",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
};
