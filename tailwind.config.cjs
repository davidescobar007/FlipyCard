/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      maxWidth: {
         "1/2": "50%"
      }
   },
   plugins: [require("daisyui")],
   daisyui: {
      styled: true,
      themes: [
         "cmyk",
         "night",
         "winter",
         "lemonade",
         {
            mytheme: {
               primary: "#58cc02", //green
               secondary: "#84d8ff", //light blue
               accent: "#ac53ef", //medium blue
               neutral: "#242533", //gray
               "base-100": "#FCFCFD", //white
               info: "#84d8ff", //same secondary blue
               success: "#58cc02", //same primary green
               warning: "#F5CE42", //orange
               error: "#DC2855" //red
            }
         }
      ],
      base: true,
      utils: true,
      logs: true
   }
}
