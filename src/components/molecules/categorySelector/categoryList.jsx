import { useContext } from "react"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import Button from "../../atoms/button"

function CategoryList({ categories }) {
   const {
      getCardsListByCategories,
      state: { categorySelected }
   } = useContext(StoreContext)
   return (
      <div className="flex overflow-x-auto pb-2 pt-3">
         {Array.isArray(categories) &&
            categories.map((item, index) => {
               return (
                  <Button
                     dangerouslyResetClassName
                     extraClassname={` flex text-lg mr-3 font-medium whitespace-nowrap rounded-full border-2 px-3 border-primary text-primary shadow-md  ${
                        categorySelected.some(
                           (catSelected) => catSelected.id === item.id
                        ) && "bg-primary !text-white"
                     }`}
                     key={index}
                     onClick={() => {
                        getCardsListByCategories(item)
                     }}
                     typeOf="SECONDARY"
                  >
                     {item.name}
                  </Button>
               )
            })}
      </div>
   )
}

CategoryList.propTypes = {
   categories: PropTypes.array.isRequired
}

export default CategoryList
