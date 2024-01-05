/* eslint-disable react/no-multi-comp */
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import WordSpecification from "../../components/molecules/wordSpecification"

const Score = lazy(() => import("../../components/molecules/score"))
function AsideRight() {
   return (
      <aside className="bg-yellow-4000 hidden sm:w-4/12 md:block md:w-3/12 ">
         <div className="fixed">
            <Routes>
               <Route element={<WordSpecification />} path="/article/:id" />
               <Route
                  element={
                     <Suspense>
                        <div className="fixed overflow-y-hidden md:right-7 md:hidden md:w-8/32 lg:block lg:w-5/24 xl:w-6/32 2xl:right-34">
                           <Score />
                        </div>
                     </Suspense>
                  }
                  path="/practice"
               />
               <Route
                  element={
                     <Suspense>
                        <div className="fixed overflow-y-hidden md:right-7 md:hidden md:w-8/32 lg:block lg:w-5/24 xl:w-6/32 2xl:right-34">
                           <Score />
                        </div>
                     </Suspense>
                  }
                  path="/learn"
               />
            </Routes>
         </div>
      </aside>
   )
}

export default AsideRight
