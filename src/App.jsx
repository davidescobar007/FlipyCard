import { BrowserRouter } from "react-router-dom"

import StoreProvider from "./context/global.state"
import Drawer from "./layouts/drawer"
import Navbar from "./layouts/navbar"
import SectionSelector from "./layouts/sectionSelector"
import Router from "./routes/index"

function App() {
   return (
      <div>
         <StoreProvider>
            <BrowserRouter>
               <Drawer>
                  <Navbar />
                  <SectionSelector />
                  <Router />
               </Drawer>
            </BrowserRouter>
         </StoreProvider>
      </div>
   )
}

export default App
