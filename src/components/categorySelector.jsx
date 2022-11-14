import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/global.state"

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
                     <button
                        className={`mr-2 whitespace-nowrap rounded-2xl border-2 border-blue-900 px-3 text-blue-900 shadow-md ${
                           Array.isArray(categorySelected) &&
                           categorySelected.includes(item) &&
                           "bg-blue-900 text-gray-200"
                        }`}
                        key={index}
                        onClick={() => getCardsListByCategories(item)}
                     >
                        {item.name}
                     </button>
                  )
               })}
         </div>
      </section>
   )
}

export default CategorySelector
