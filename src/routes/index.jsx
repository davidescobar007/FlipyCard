import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import Loader from "../components/atoms/loader"
import Aside from "../layouts/aside"

const Home = lazy(() => import("../pages/home"))
const NewSet = lazy(() => import("../pages/newSetOfCards/index"))

export default function Router() {
   return (
      <section className="mx-10 mt-20 flex flex-initial">
         <main className="w-3/5">
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
         <Aside />
      </section>
   )
}
