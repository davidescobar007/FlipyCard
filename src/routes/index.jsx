import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import Loader from "../components/atoms/loader"

const Home = lazy(() => import("../pages/home"))
const NewSet = lazy(() => import("../pages/newSetOfCards/index"))

export default function Router() {
   return (
      <main className="flex-grow px-4 pt-16 md:px-10 lg:px-52">
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
