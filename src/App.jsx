import { BrowserRouter } from "react-router-dom"

import StoreProvider from "./context/global.state"
import Aside from "./layouts/aside"
import Drawer from "./layouts/drawer"
import MmodalContainer from "./layouts/drawer/modalContainer"
import Footer from "./layouts/footer"
import Navbar from "./layouts/navbar"
import SectionSelector from "./layouts/sectionSelector"
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
                        <Aside />
                        <Router />
                        <SectionSelector />
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
