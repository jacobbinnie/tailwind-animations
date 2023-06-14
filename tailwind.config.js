/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      animation: {
        "gradient-xy": "gradient-xy 5s ease infinite",
        "gradient-green": "gradient-green 2s ease infinite",
        "background-gradient": "background-gradient 10s ease infinite",
      },
      keyframes: {
        "gradient-xy": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
          },
        },
        "gradient-green": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
        },
        "background-gradient": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 80%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 70%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },
      },
      colors: {
        primary: {
          light: "#111827",
          dark: "#f3f4f6",
        },
        secondary: {
          light: "f3f4f6",
          dark: "#111827",
        },
        accent: {
          main: "#3730a3",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
