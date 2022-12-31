import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import Loader from "../components/atoms/loader"

const Home = lazy(() => import("../pages/home"))
const NewSet = lazy(() => import("../pages/newSetOfCards/index"))

export default function Router() {
   return (
      <main className="bg-blue-4000 grow px-20">
         <Routes>
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Home />
                  </Suspense>
               }
               path="/"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <NewSet />
                  </Suspense>
               }
               path="/new-set"
            />
         </Routes>
      </main>
   )
}
