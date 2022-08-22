import React, { useContext, useEffect } from "react"
import Button from "./button"
import { AppContext } from "../context"
import { getCollectionList, getDataByQuery } from "../services"

const CategorySelector = () => {
   const {
      setCards,
      categories,
      setCategories,
      categorySelected,
      setCategorySelected,
      setCategoryId,
   } = useContext(AppContext)

   const selectCategory = (item) => {
      setCategorySelected(item)
      getDataByQuery("cards", "categorySelected", item).then((data) => {
         setCards(data)
      })
   }

   useEffect(() => {
      getCollectionList("categories").then((data) => {
         const dataCleaned = data.map((item) => item.data.categoryList)
         const id = data.map((item) => item.id)
         setCategoryId(id[0])
         setCategories(dataCleaned.flat().filter((item) => item !== ""))
      })
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
