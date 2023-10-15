/* eslint-disable react/no-multi-comp */
import { Route, Routes } from "react-router-dom"

import WordSpecification from "../../components/molecules/wordSpecification"

function AsideRight() {
   return (
      <aside className="bg-yellow-4000  hidden sm:w-4/12 md:block md:w-3/12 ">
         <div className="fixed">
            <Routes>
               <Route element={<WordSpecification />} path="/article/:id" />
            </Routes>
         </div>
      </aside>
   )
}

export default AsideRight
