/* eslint-disable react/forbid-component-props */
import React, { useContext } from "react"
import { RiSave2Fill, RiSave2Line } from "react-icons/ri"

import { StoreContext } from "../../../context/global.state"
import Title from "../../atoms/title/title"
export default function WordSpecification() {
   const {
      state: { selectedWord, selectedWordTranslation }
   } = useContext(StoreContext)

   return (
      <section className="bg-orange-3000 fixed flex flex-wrap justify-between rounded-2xl border-2 border-accent bg-secondary p-2 md:right-5 md:w-8/32 lg:w-5/24 xl:w-6/32 2xl:right-32">
         {selectedWord ? (
            <>
               <Title extraClassName="text-xl underline w-10/12 font-medium" type="h3">
                  {selectedWord}
               </Title>
               <div className="right-5 mt-1 flex w-2/12 cursor-pointer justify-end">
                  <label className="swap">
                     <input type="checkbox" />
                     <RiSave2Fill className="swap-on h-6 w-6 fill-current" />
                     <RiSave2Line className="swap-off h-6 w-6 fill-current" />
                  </label>
               </div>
               <div className="mt-3">
                  <Title extraClassName="font-medium text-lg" type="h4">
                     *{selectedWordTranslation?.spanish_translation || ""}
                  </Title>

                  <p className="text-md mt-4 text-justify font-normal">
                     <span className="font-medium">Z.B. </span>
                     {selectedWordTranslation?.examples?.data[1]?.german}
                  </p>
               </div>
            </>
         ) : (
            <Title extraClassName="text-lg  w-10/12 font-medium" type="h3">
               You can select any word now from the text
            </Title>
         )}
      </section>
   )
}
