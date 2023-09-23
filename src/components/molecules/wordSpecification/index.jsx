import React, { useContext } from "react"
import { FiSave } from "react-icons/fi"

import { StoreContext } from "../../../context/global.state"
import Title from "../../atoms/title/title"
export default function WordSpecification() {
   const {
      state: { selectedWord }
   } = useContext(StoreContext)
   return (
      <section className="fixed right-5 flex w-64 justify-between bg-orange-300">
         <div>
            <Title extraClassName="text-lg" type="h3">
               {selectedWord}
            </Title>
         </div>
         <div className="right-5">
            <FiSave />
         </div>
      </section>
   )
}
