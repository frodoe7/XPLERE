/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index2.html"],
  theme: {
    extend: {
      translate: {
        "-z-10": "-10px",
        "z-10": "10px",
      },
      colors: {
        background: "#040516",
        border: "#0C0E34",
        nav: "#c0cac9",
        primary: "#63E7FF",
      },
      backgroundImage: {
        products: 'url("./images/arrows-background.png")',
        services: 'url("./images/services-background.png")',
      },
      transformStyle: {
        flat: "flat",
        preserve3d: "preserve-3d",
      },
      keyframes: {
        slideDownUp: {
          "0%": { transform: "translateY(0px)" },
          "16.67%": { transform: "translateY(-110px)" },
          "33.33%": { transform: "translateY(-200px)" },
          "50%": { transform: "translateY(-300px)" },
          "66.67%": { transform: "translateY(-400px)" },
          "83.33%": { transform: "translateY(-500px)" },
          "90%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(0px)" },
        },

        // slideCycle: {
        //   "0%, 95%": { transform: "translateY(0)" },
        //   "100%": { transform: "translateY(-500%)" },
        // },
      },
      animation: {
        slideWord: "slideDownUp 15s infinite ",
        // slideContainer: "slideCycle 12s linear infinite",
      },
    },
    fontFamily: {
      opti: ["optilimitedview"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transform-flat": {
          transformStyle: "flat",
        },
        ".transform-preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective-1000": {
          perspective: "1000px",
        }
      });
    },
  ],
};
