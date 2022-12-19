import StoreProvider from "./context/global.state"
import { BrowserRouter } from "react-router-dom"
import Drawer from "./layouts/drawer"
import Navbar from "./layouts/navbar"
import Router from "./routes/index"
import Footer from "./layouts/footer"

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
