const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["'Archivo'", "sans-serif"],
        alkalami: ["'Alkalami'", "sans-serif"],
        Antic: ["'Antic'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
