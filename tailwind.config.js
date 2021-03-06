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
      boxShadow: {
        inset: "inset 0px 0px 40px 40px red",
      },
      colors: {
        primary: "#059669",
        "primary-light": "#34d399",
        secondary: "#EEEFD1",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
