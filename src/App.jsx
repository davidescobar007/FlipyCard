import Navbar from "./layouts/navbar"
import StoreProvider from "./context/global.state"
import Aside from "./layouts/aside"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes"

function App() {
   return (
      <StoreProvider>
         <BrowserRouter>
            <div className="min-h-screen bg-slate-50">
               <Aside />
               <Navbar />
               <Router />
            </div>
         </BrowserRouter>
      </StoreProvider>
   )
}

export default App
