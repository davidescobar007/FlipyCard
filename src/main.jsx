import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "/public/styles/animate.scss"
import "/public/styles/customAnimations.scss"
import "./main.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)
