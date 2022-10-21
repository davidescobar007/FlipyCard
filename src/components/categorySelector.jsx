import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/global.state"

function CategorySelector() {
   const {
      getCategoryList,
      getCardsListByCategories,
      state: { categories, categorySelected }
   } = useContext(StoreContext)

   const selectCategory = (category) => {
      getCardsListByCategories(category)
   }

   useEffect(() => {
      getCategoryList()
   }, [])

   return (
      <section className="mb-5">
         <div className=" flex overflow-x-auto py-2">
            {Array.isArray(categories) &&
               categories.map((item, index) => (
                  <button
                     className={`mr-2 whitespace-nowrap rounded-lg border-2 border-blue-900 px-3 text-blue-900 shadow-md ${
                        categorySelected.includes(item)
                           ? "bg-blue-900 text-gray-200"
                           : ""
                     }`}
                     key={index}
                     onClick={() => selectCategory(item)}
                  >
                     {item.name}
                  </button>
               ))}
         </div>
      </section>
   )
}

export default CategorySelector
