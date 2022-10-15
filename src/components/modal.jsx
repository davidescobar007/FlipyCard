import { useContext } from "react"
import { updateDocument } from "../services"
import { StoreContext } from "../context/global.state"

function Modal() {
   const { categories, setCategories, categoryId } = useContext(StoreContext)

   const handleSubmit = async (e) => {
      e.preventDefault()
      const value = e.target.elements.categoryNameModal.value
      const categoryList = [value, ...categories]
      !categories.includes(value) && setCategories(categoryList)
      // await setDocument("categories", {
      //   categoriesMerged,
      //   userId: "",
      // });
      await updateDocument("categories", categoryId, { categoryList })
   }

   return (
      <div
         aria-hidden="true"
         aria-labelledby="staticBackdropLabel"
         className="modal fade"
         data-bs-backdrop="static"
         data-bs-keyboard="false"
         id="staticBackdrop"
         tabIndex="-1"
      >
         <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                     Create new category
                  </h5>
                  <button
                     aria-label="Close"
                     className="btn-close"
                     data-bs-dismiss="modal"
                     type="button"
                  />
               </div>
               <div className="modal-body">
                  <form onSubmit={(e) => handleSubmit(e)}>
                     <div className="mb-3">
                        <label
                           className="form-label"
                           htmlFor="categoryNameModal"
                        >
                           Category name
                        </label>
                        <input
                           aria-describedby="emailHelp"
                           className="form-control"
                           id="categoryNameModal"
                           name="categoryNameModal"
                           type="text"
                        />
                     </div>

                     <div className="d-grid col-6 mx-auto gap-2">
                        <button
                           className="btn btn-outline-primary"
                           data-bs-dismiss="modal"
                        >
                           Create category
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal
