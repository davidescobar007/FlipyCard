import { BrowserRouter } from "react-router-dom"

import StoreProvider from "./context/global.state"
import Drawer from "./layouts/drawer"
import Navbar from "./layouts/navbar"
import Option from "./layouts/options"
import Router from "./routes/index"

function App() {
   return (
      <div>
         <StoreProvider>
            <BrowserRouter>
               <Drawer>
                  <Navbar />
                  <Option />
                  <Router />
               </Drawer>
            </BrowserRouter>
         </StoreProvider>
      </div>
   )
}

export default App
