/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{mjs,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    colors: {
      "prim-1": "#C22529",
      "prim-a": "#EA2C29",
      beige: "#DFD0B0",
      "light-brown": "#B09485",
      "sec-1": "#EDBD56",
      "sec-2": "#DAA32C",
      "off-white": "#EDECEC",
      "off-black": "#1E1E1E",
      "brown-trans": "#864949E0",
      "tert-1": "#C1BFFF",
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "scaleY(0)" },
        "80%": { transform: "scaleY(1.2)" },
        "100%": { transform: "scaleY(1)" },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
    },
    extend: {
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [
    require('tailwind-children'),
    require('@headlessui/tailwindcss'),
  ],
};
