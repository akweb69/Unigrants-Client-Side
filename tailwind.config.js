/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Play", "serif"],
        primary: ["Poppins", "serif"],
        secondary: ["Oxygen", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
