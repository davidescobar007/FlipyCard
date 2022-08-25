import React, { useContext, useEffect } from "react"
import Button from "./button"
import { StoreContext } from "../context/global.state"

const CategorySelector = () => {
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
         <div>
            <Button color="warning" isModalTrigger isSelected>
               Add new category. +
            </Button>
         </div>
         {Array.isArray(categories) &&
            categories.map((item, index) => (
               <a
                  className={`mt-3 me-2 ${
                     categorySelected.includes(item)
                        ? "text-primary fw-bold"
                        : "text-secondary"
                  }`}
                  href="#"
                  key={index}
                  onClick={() => selectCategory(item)}
                  style={{ textDecoration: "none" }}
               >
                  #{item}
               </a>
            ))}
      </section>
   )
}

export default CategorySelector
