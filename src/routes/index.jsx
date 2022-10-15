import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import("../pages/home"))
export default function Router() {
   return (
      <main className="px-3">
         <Routes>
            <Route
               element={
                  <Suspense fallback={<>loading...</>}>
                     <Home />
                  </Suspense>
               }
               path="/"
            />
            <Route
               element={
                  <Suspense>
                     <h3>new set of cards</h3>
                  </Suspense>
               }
               path="/new-set"
            />
         </Routes>
      </main>
   )
}
