import { BrowserRouter } from "react-router-dom"

import StoreProvider from "./context/global.state"
import Drawer from "./layouts/drawer"
import Footer from "./layouts/footer"
import Navbar from "./layouts/navbar"
import Router from "./routes/index"

function App() {
   return (
      <StoreProvider>
         <BrowserRouter>
            <Drawer>
               <Navbar />
               <Router />
               <Footer />
            </Drawer>
         </BrowserRouter>
      </StoreProvider>
   )
}

export default App
