/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "1px",
      md: "700px",
      lg: "1000px",
      xl: "1220px",
      xxl: "1400px",
      custom: "1200px",
      mobile: "360px",
      Craftsmanship: "1479",
    },
    extend: {
      backgroundImage: {
        // "hero-pattern": "url('/img/feature/color/MW09/MW09_first_color.png')",
        "footer-texture": "url('img/feature/color/MW09/MW09_first_color.png')",
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "translateX(0%)",
          },

          "100%": {
            transform: "translateX(100%)",
            width: "0",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
            // transform: "translateY(-10px)",
          },
          // "50%": {
          //   opacity: "0.5",
          //   // transform: "translateY(-10px)",
          // },
          "100%": {
            opacity: "1",
            // transform: "translateY(0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          // "50%": {
          //   opacity: "0.5",
          //   // transform: "translateY(-10px)",
          // },
          "100%": {
            opacity: "0",
            // transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s",
        fadeout: "fadeout 0.5s",
        scale: "scale 1s",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
