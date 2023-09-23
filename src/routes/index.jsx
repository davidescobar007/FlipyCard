import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import Loader from "../components/atoms/loader"

const Learn = lazy(() => import("../pages/learn"))
const _NewSet = lazy(() => import("../pages/newSetOfCards/index"))
const _Sections = lazy(() => import("../pages/sections"))
const Article = lazy(() => import("../pages/article"))
export default function Router() {
   return (
      <main className="w-full bg-blue-400 md:w-7/12 md:px-16 md:pr-0">
         <Routes>
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Learn />
                  </Suspense>
               }
               path="/"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Article />
                  </Suspense>
               }
               path="/article"
            />
            {/* <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <NewSet />
                  </Suspense>
               }
               path="/new-set"
            />
            <Route
               element={
                  <Suspense fallback={<Loader />}>
                     <Sections />
                  </Suspense>
               }
               path="/sections"
            /> */}
         </Routes>
      </main>
   )
}
