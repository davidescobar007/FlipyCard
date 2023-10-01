/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         width: {
            "1/24": "4.166667%",
            "3/24": "12.5%", // 3/24 of the container width
            "4/24": "16.666667%", // 4/24 of the container width
            "5/24": "20.833333%", // 5/24 of the container width
            "6/24": "25%", // 6/24 of the container width
            "7/24": "29.166667%", // 7/24 of the container width
            "8/24": "33.333333%", // 8/24 of the container width
            "9/24": "37.5%", // 9/24 of the container width
            "10/24": "41.666667%", // 10/24 of the container width
            "11/24": "45.833333%", // 11/24 of the container width
            "12/24": "50%", // 12/24 of the container width
            "13/24": "54.166667%", // 13/24 of the container width
            "14/24": "58.333333%", // 14/24 of the container width
            "15/24": "62.5%", // 15/24 of the container width
            "16/24": "66.666667%", // 16/24 of the container width
            "17/24": "70.833333%", // 17/24 of the container width
            "18/24": "75%", // 18/24 of the container width
            "19/24": "79.166667%", // 19/24 of the container width
            "20/24": "83.333333%", // 20/24 of the container width
            "21/24": "87.5%", // 21/24 of the container width
            "22/24": "91.666667%", // 22/24 of the container width
            "23/24": "95.833333%", // 23/24 of the container width
            "24/24": "100%",
            "1/32": "3.125%",
            "2/32": "6.25%",
            "3/32": "9.375%",
            "4/32": "12.5%",
            "5/32": "15.625%",
            "6/32": "18.75%",
            "7/32": "21.875%",
            "8/32": "25%",
            "9/32": "28.125%",
            "10/32": "31.25%",
            "11/32": "34.375%",
            "12/32": "37.5%",
            "13/32": "40.625%",
            "14/32": "43.75%",
            "15/32": "46.875%",
            "16/32": "50%",
            "17/32": "53.125%",
            "18/32": "56.25%",
            "19/32": "59.375%",
            "20/32": "62.5%",
            "21/32": "65.625%",
            "22/32": "68.75%",
            "23/32": "71.875%",
            "24/32": "75%",
            "25/32": "78.125%",
            "26/32": "81.25%",
            "27/32": "84.375%",
            "28/32": "87.5%",
            "29/32": "90.625%",
            "30/32": "93.75%",
            "31/32": "96.875%",
            "32/32": "100%"
         },
         height: {
            "1/24": "4.166667%",
            "3/24": "12.5%", // 3/24 of the container width
            "4/24": "16.666667%", // 4/24 of the container width
            "5/24": "20.833333%", // 5/24 of the container width
            "6/24": "25%", // 6/24 of the container width
            "7/24": "29.166667%", // 7/24 of the container width
            "8/24": "33.333333%", // 8/24 of the container width
            "9/24": "37.5%", // 9/24 of the container width
            "10/24": "41.666667%", // 10/24 of the container width
            "11/24": "45.833333%", // 11/24 of the container width
            "12/24": "50%", // 12/24 of the container width
            "13/24": "54.166667%", // 13/24 of the container width
            "14/24": "58.333333%", // 14/24 of the container width
            "15/24": "62.5%", // 15/24 of the container width
            "16/24": "66.666667%", // 16/24 of the container width
            "17/24": "70.833333%", // 17/24 of the container width
            "18/24": "75%", // 18/24 of the container width
            "19/24": "79.166667%", // 19/24 of the container width
            "20/24": "83.333333%", // 20/24 of the container width
            "21/24": "87.5%", // 21/24 of the container width
            "22/24": "91.666667%", // 22/24 of the container width
            "23/24": "95.833333%" // 23/24 of the container width
         }
      },

      maxWidth: {
         "1/2": "50%",
         "": ""
      },
      minWidth: {
         36: "36px",
         "100%": "100%"
      }
   },
   plugins: [require("@tailwindcss/typography"), require("daisyui")],
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
               myCustom: "#21262c"
            }
         }
      ],
      base: true,
      utils: true,
      logs: true
   }
}
