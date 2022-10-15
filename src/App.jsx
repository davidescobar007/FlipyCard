import Navbar from "./layouts/navbar"
import CategorySelector from "./components/categorySelector"
import StoreProvider from "./context/global.state"
import Aside from "./layouts/aside"
import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const CardsContainer = lazy(() => import("./components/cardsContainer"))
function App() {
   return (
      <StoreProvider>
         <BrowserRouter>
            <div className="min-h-screen bg-slate-50">
               <Aside />
               <Navbar />
               <main className="px-3">
                  <Routes>
                     <Route
                        element={
                           <Suspense fallback={<>loading...</>}>
                              <CategorySelector />
                              <CardsContainer />
                           </Suspense>
                        }
                        path="/"
                     />

                     <Route
                        element={
                           <Suspense fallback={<>loading...</>}>
                              <h3>new set of cards</h3>
                           </Suspense>
                        }
                        path="/new-set"
                     />
                  </Routes>
               </main>
            </div>
         </BrowserRouter>
      </StoreProvider>
   )
}

export default App
