/* eslint-disable react/forbid-component-props */
import React, { useContext, useEffect, useState } from "react"
import { RiCheckFill, RiEdit2Line } from "react-icons/ri"

import { StoreContext } from "../../../context/global.state"

import CategoryList from "./categoryList"
import EditCategory from "./edit"

function CategorySelector() {
   const [isEditOn, setIsEditOn] = useState(false)
   const {
      getCategoriesBySections,
      state: { categories, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      getCategoriesBySections(selectedSection)
   }, [selectedSection])

   return (
      <div className="mb-5 flex flex-nowrap">
         <div className="tooltip mr-2" data-tip="Edit categories">
            <label className="swap swap-rotate">
               <input type="checkbox" />
               <RiCheckFill
                  className="swap-on h-10 w-10 rounded-full bg-primary p-2 text-white"
                  onClick={() => {
                     setIsEditOn(true)
                  }}
               />
               <RiEdit2Line
                  className="swap-off h-10 w-10 rounded-full border-2 border-primary p-2 text-primary"
                  onClick={() => {
                     setIsEditOn(false)
                  }}
               />
            </label>
         </div>
         {isEditOn ? <EditCategory categories={categories} /> : <CategoryList categories={categories} />}
      </div>
   )
}

export default CategorySelector
