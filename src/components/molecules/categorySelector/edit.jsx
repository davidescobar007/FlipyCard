import { useContext, useState } from "react"
import { RiDeleteBinFill } from "react-icons/ri"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import Button from "../../atoms/button"
import Modal from "../modal"

function EditCategory({ categories }) {
   const [cateogryToDelete, setCateogryToDelete] = useState()
   const { deleteCategory } = useContext(StoreContext)

   return (
      <div className="flex overflow-x-auto p-2 py-3">
         <Modal id="deleteCategory" title="Please comfirm.">
            <p className="text-lg">
               You are about to delete this category:{" "}
               <b>{cateogryToDelete?.name}. </b>
               Do you comfirm this action?
            </p>
            <div className="modal-action">
               <label
                  className="btn"
                  htmlFor="deleteCategory"
                  onClick={() => {
                     deleteCategory(cateogryToDelete)
                  }}
               >
                  Delete
               </label>
            </div>
         </Modal>
         {Array.isArray(categories) &&
            categories.map((item, index) => {
               return (
                  <div className="indicator mr-5" key={index}>
                     <span
                        className="animate__animated animate__fadeIn animate__faster badge indicator-item badge-primary rounded-full text-base-100"
                        onClick={() => setCateogryToDelete(item)}
                     >
                        <label className="underline" htmlFor="deleteCategory">
                           <RiDeleteBinFill />
                        </label>
                     </span>
                     <Button
                        dangerouslyResetClassName
                        extraClassname="flex text-lg font-medium whitespace-nowrap rounded-full border-2 px-3 border-primary text-primary shadow-md"
                        key={index}
                        typeOf="INFO"
                     >
                        {item.name}
                     </Button>
                  </div>
               )
            })}
      </div>
   )
}

EditCategory.propTypes = {
   categories: PropTypes.array.isRequired
}
export default EditCategory
