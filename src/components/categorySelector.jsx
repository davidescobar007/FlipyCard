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
         <Button
            color="warning"
            isModalTrigger
            isSelected
            text="Add new category. +"
         />
         {Array.isArray(categories) &&
            categories.map((item, index) => (
               <a
                  className={`me-2 ${
                     categorySelected === item
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
