/* eslint-disable react/forbid-component-props */
import React, { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../../context/global.state"
import Button from "../../atoms/button"
import AddSection from "../addCategory"
import { RiEdit2Line, RiCheckFill } from "react-icons/ri"
import EditCategory from "./edit"

function CategorySelector() {
   const [isEditOn, setIsEditOn] = useState(false)
   const {
      getCategoryList,
      getCardsListByCategories,
      state: { categories, categorySelected, selectedSection }
   } = useContext(StoreContext)

   useEffect(() => {
      getCategoryList()
   }, [selectedSection])

   return (
      <section className="py-6">
         <AddSection />
         <div className="flex flex-nowrap">
            <div className="tooltip mt-2 mr-2" data-tip="Edit categories">
               <label className="swap-rotate swap">
                  <input type="checkbox" />
                  <RiCheckFill className="swap-on h-10 w-10 rounded-full bg-secondary p-2 text-white" onClick={()=>{setIsEditOn(!isEditOn)}} />
                  <RiEdit2Line  className="swap-off h-10 w-10 rounded-full border-2 border-secondary p-2 text-secondary" onClick={()=>{setIsEditOn(!isEditOn)}}/>
               </label>
            </div>
            {isEditOn ? (
               <EditCategory categories={categories} />
            ) : (
               <div className=" flex overflow-x-auto p-2 py-3">
                  {Array.isArray(categories) &&
                     categories.map((item, index) => {
                        return (
                           <Button
                              dangerouslyResetClassName
                              extraClassname={` flex text-lg mr-2 font-medium whitespace-nowrap rounded-full border-2 px-3 border-secondary text-secondary shadow-md  ${
                                 categorySelected.some(
                                    (catSelected) => catSelected.id === item.id
                                 ) && "bg-secondary !text-white"
                              }`}
                              key={index}
                              onClick={() => {
                                 getCardsListByCategories(item)
                              }}
                              typeOf="INFO"
                           >
                              {item.name}
                           </Button>
                        )
                     })}
               </div>
            )}
         </div>
      </section>
   )
}

export default CategorySelector
