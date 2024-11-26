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
        fadeImage: "linear-gradient(to top, #04051600 60%, #040516FF 100%)",
      },
      transformStyle: {
        flat: "flat",
        preserve3d: "preserve-3d",
      },
      keyframes: {
        slideDownUp: {
          "0%": { transform: "translateY(0px)" },
          "8%": { transform: "translateY(0px)" },
          "16%": { transform: "translateY(-100px)" },
          "24%": { transform: "translateY(-100px)" },
          "32%": { transform: "translateY(-200px)" },
          "40%": { transform: "translateY(-200px)" },
          "48%": { transform: "translateY(-300px)" },
          "56%": { transform: "translateY(-300px)" },
          "64%": { transform: "translateY(-400px)" },
          "72%": { transform: "translateY(-400px)" },
          "80%": { transform: "translateY(-500px)" },
          "88%": { transform: "translateY(-500px)" },
          "96%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(0px)" },
        },
        reveal: {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        slideWord:
          "slideDownUp 15s infinite cubic-bezier(0.8, 0.25, 0.12, 1.46)",
        reveal: "reveal 1s ease-in-out forwards",
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
        },
      });
    },
  ],
};
