import React, { useContext, useEffect } from "react"
import Button from "./button"
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
         <div>
            <button
               aria-controls="collapseExample"
               aria-expanded="false"
               className="btn btn-warning me-5 mb-3"
               data-bs-target="#collapseExample"
               data-bs-toggle="collapse"
               type="button"
            >
               Add new flip card
            </button>
         </div>
         <div>
            <Button color="warning" isModalTrigger isSelected>
               Add new category. +
            </Button>
         </div>
         <div className="d-flex cardSelector-container">
            {Array.isArray(categories) &&
               categories.map((item, index) => (
                  <button
                     className={`cardSelector-button${
                        categorySelected.includes(item) ? "_active" : ""
                     }`}
                     key={index}
                     onClick={() => selectCategory(item)}
                  >
                     {item}
                  </button>
               ))}
         </div>
      </section>
   )
}

export default CategorySelector
