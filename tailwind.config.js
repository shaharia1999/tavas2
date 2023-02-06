/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        gilroy: ["GilroyNormal", "Light"],
        gilroybold: ["GilroyBold", "ExtraBold"],
      }
    },
  },
  plugins: [require("daisyui")],
}
