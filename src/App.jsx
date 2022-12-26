import { BrowserRouter } from "react-router-dom"

import StoreProvider from "./context/global.state"
import Drawer from "./layouts/drawer"
import Navbar from "./layouts/navbar"
import Router from "./routes/index"

function App() {
   return (
      <div>
         <StoreProvider>
            <BrowserRouter>
               <Drawer>
                  <Navbar />
                  <Router />
               </Drawer>
            </BrowserRouter>
         </StoreProvider>
      </div>
   )
}

export default App
