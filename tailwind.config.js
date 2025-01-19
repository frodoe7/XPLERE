/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
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
        primaryDark: "#029ab5",
        lightBlue: "#138BC6",
      },
      backgroundImage: {
        products: 'url("./images/arrows-background.png")',
        services: 'url("./images/services-background.png")',
        fadeImage: "linear-gradient(to top, #04051600 60%, #040516FF 100%)",

        "primary-gradient": "linear-gradient(90deg, #029AB5 0%, #63E7FF 100%)",
        "dark-gradient-horizontal":
          "linear-gradient(90deg, rgba(4,5,22,0.00) 1.07%, #04061D 51.16%)",
        "dark-gradient-vertical":
          "linear-gradient(180deg, rgba(4,5,22,0.00) 1.07%, #04061D 51.16%)",
        "dark-gradient-angled":
          "linear-gradient(182deg, rgba(4,5,22,0.00) 14.82%, #04061D 94.51%)",
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
        moveBall: {
          "0%": {
            top: 0,
            left: 0,
            transform: "translateX(-50%)",
          },
          "100%": {
            top: "100%",
            left: 0,
            transform: "translate(-25%, -100%)",
          },
        },
        riseText: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(calc(-50% - 20px))",
          },
        },
      },
      animation: {
        slideWord:
          "slideDownUp 15s infinite cubic-bezier(0.8, 0.25, 0.12, 1.46)",
        reveal: "reveal 1s ease-in-out forwards",
        moveBall: "moveBall 4s infinite alternate ease-in-out",
        riseText: "riseText 1.5s ease-in-out forwards 0.2s",
        scroll: "scroll 20s linear infinite",
      },
    },
    fontFamily: {
      opti: ["optilimitedview"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
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
