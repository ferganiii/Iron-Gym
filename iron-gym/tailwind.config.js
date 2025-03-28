const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/**/*.{html,js,jsx,tsx,ts}",
    "node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["'Archivo'", "sans-serif"],
        alkalami: ["'Alkalami'", "sans-serif"],
        Antic: ["'Antic'", "sans-serif"],
        AlfaSlabOne: ["'Alfa Slab One'", "sans-serif"],
        Andika: ["'Andika'", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), 
    require("tailwind-scrollbar"), 
  ],
};
