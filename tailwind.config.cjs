/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      maxWidth: {
         "1/2": "50%",
      }
   },
   plugins: [require("daisyui")],
   daisyui: {
      styled: true,
      themes: [
         "cmyk",
         "night",
         "winter",
         {
            day: {
               primary: "#63adf2",
               secondary: "#07004d",
               accent: "#05f140",
               neutral: "#1B1C27",
               "base-100": "#fbf5f3",
               info: "#54AEDE",
               success: "#70DBB8",
               warning: "#B9800E",
               error: "#ff6978"
            }
         }
      ],
      base: true,
      utils: true,
      logs: true
   }
}
