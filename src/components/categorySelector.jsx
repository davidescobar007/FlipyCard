import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/global.state"
import Button from "./button"

function CategorySelector() {
   const {
      getCategoryList,
      getCardsListByCategories,
      state: { categories, categorySelected, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      console.log("getCategorylList useffect")
      getCategoryList()
   }, [selectedSection])

   return (
      <section className="my-5">
         <div className=" flex overflow-x-auto pb-2">
            {Array.isArray(categories) &&
               categories.map((item, index) => {
                  return (
                     <Button
                        dangerouslyResetClassName
                        extraClassname={`text-lg mr-2 font-medium whitespace-nowrap rounded-full border-2 px-3 border-blue-500 text-blue-500 shadow-md ${
                           categorySelected.some(
                              (catSelected) => catSelected.name === item.name
                           ) && "bg-blue-500 !text-white"
                        }`}
                        key={index}
                        onClick={() => getCardsListByCategories(item)}
                        typeOf="INFO"
                     >
                        {item.name}
                     </Button>
                  )
               })}
         </div>
      </section>
   )
}

export default CategorySelector
