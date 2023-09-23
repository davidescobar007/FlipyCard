import { BrowserRouter } from "react-router-dom"

import StoreProvider from "./context/global.state"
import AsideLeft from "./layouts/asideLeft"
import AsideRight from "./layouts/asideRight"
import Drawer from "./layouts/drawer"
import MmodalContainer from "./layouts/drawer/modalContainer"
import Footer from "./layouts/footer"
import Navbar from "./layouts/navbar"
import Router from "./routes/index"

function App() {
   return (
      <div>
         <StoreProvider>
            <BrowserRouter>
               <MmodalContainer>
                  <>
                     <Navbar />
                     <Drawer>
                        <AsideLeft />
                        <Router />
                        <AsideRight />
                     </Drawer>
                     <Footer />
                  </>
               </MmodalContainer>
            </BrowserRouter>
         </StoreProvider>
      </div>
   )
}

export default App
