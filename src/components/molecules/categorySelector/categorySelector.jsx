import React, { useContext, useEffect } from "react"
import { StoreContext } from "../../../context/global.state"
import Button from "../../atoms/button"
import AddSection from "./addSection"

function CategorySelector() {
   const {
      getCategoryList,
      getCardsListByCategories,
      state: { categories, categorySelected, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      getCategoryList()
   }, [selectedSection])

   return (
      <section className="my-5">
         <AddSection />
         <div className=" flex overflow-x-auto pb-2">
            {Array.isArray(categories) &&
               categories.map((item, index) => {
                  return (
                     <Button
                        dangerouslyResetClassName
                        extraClassname={`text-lg  mr-2 font-medium whitespace-nowrap rounded-full border-2 px-3 border-secondary text-secondary shadow-md ${
                           categorySelected.some(
                              (catSelected) => catSelected.name === item.name
                           ) && "bg-secondary !text-white"
                        }`}
                        key={index}
                        onClick={(e) => {
                           getCardsListByCategories(item)
                           console.log(e.target.state)
                        }}
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
