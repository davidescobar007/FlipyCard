import Navbar from "./components/navbar/navbar"
import Collapse from "./components/collapse"
import CategorySelector from "./components/categorySelector"
// import CardsContainer from "./components/cardsContainer"
import StoreProvider from "./context/global.state"
// import Modal from "./components/modal"
import Aside from "./components/aside/aside"
import { lazy, Suspense } from "react"
const Modal = lazy(() => import("./components/modal"))
const CardsContainer = lazy(() => import("./components/cardsContainer"))

function App() {
   return (
      <StoreProvider>
         <div className="App">
            <Aside />
            <main className="container app_container">
               <Navbar />
               <CategorySelector />
               <Collapse />
               <Suspense fallback={<div>loading...</div>}>
                  <Modal />
               </Suspense>
               <Suspense fallback={<div>loading...</div>}>
                  <CardsContainer />
               </Suspense>
            </main>
         </div>
      </StoreProvider>
   )
}

export default App
