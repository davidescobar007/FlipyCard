import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import("../pages/home"))
const NewSet = lazy(() => import("../pages/newSetOfCards/index"))
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
                  <Suspense fallback={<>loading...</>}>
                     <NewSet />
                  </Suspense>
               }
               path="/new-set"
            />
         </Routes>
      </main>
   )
}
