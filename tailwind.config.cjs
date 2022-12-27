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
               secondary: "#ddf4ff", //light blue
               accent: "#44ccff", //medium blue
               neutral: "#777", //gray
               "base-100": "#F8F9FC", //white
               info: "#84d8ff", //same secondary blue
               success: "#58cc02", //same primary green
               warning: "#F5CE42", //orange
               error: "#DC2855", //red
               myCustom: "#45D9B1"
            }
         }
      ],
      base: true,
      utils: true,
      logs: true
   }
}
