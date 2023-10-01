import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      VitePWA({
         registerType: "autoUpdate",
         workbox: {
            globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
         },
         includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
         manifest: {
            name: "Study smart, study with Flipycard",
            short_name: "FlipyCard",
            description:
               "FlipyCard is the best tool for flash cards, it will help you memorize anything you need!",
            theme_color: "#58cc02",
            background_color: "#58cc02",
            icons: [
               {
                  src: "/icon-192x192.png",
                  sizes: "192x192",
                  type: "image/png"
               },
               {
                  src: "/icon-256x256.png",
                  sizes: "256x256",
                  type: "image/png"
               },
               {
                  src: "/icon-384x384.png",
                  sizes: "384x384",
                  type: "image/png"
               },
               {
                  src: "/icon-512x512.png",
                  sizes: "512x512",
                  type: "image/png"
               }
            ]
         }
      }),
      react()
   ],
   server: {
      host: true
   }
})
