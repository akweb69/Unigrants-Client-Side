/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "slider-01": "url('/src/assets/images/slider1.jpg')",
        "slider-02": "url('/src/assets/images/slider2.jpg')",
        "slider-03": "url('/src/assets/images/slider3.jpg')",
      },
      fontFamily: {
        logoFont: ["Play", "serif"],
        primary: ["Poppins", "serif"],
        secondary: ["Oxygen", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
