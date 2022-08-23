import React, { useContext, useState } from "react"
import { StoreContext } from "../context/global.state"
import CategorySelector from "./categorySelector"

const FormSubmit = () => {
   const [formData, setFormData] = useState(null)

   const {
      saveNewCard,
      state: { categorySelected }
   } = useContext(StoreContext)

   const handleSubmit = async (e) => {
      e.preventDefault()
      if (!categorySelected.length) {
         return alert("Please select a category")
      }
      const collapseElementList = document.querySelectorAll(".collapse")
      // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
      const collapseList = [...collapseElementList].map(
         // eslint-disable-next-line no-undef
         (collapseEl) => new bootstrap.Collapse(collapseEl)
      )
      setFormData(null)
      saveNewCard({
         ...formData,
         ...{ category: categorySelected, timesSeen: 0, userId: "" }
      })
   }

   return (
      <div>
         <form className="row g-3 mb-5" onSubmit={(e) => handleSubmit(e)}>
            <CategorySelector />
            <div className="col-12 col-md-6">
               <label className="form-label" htmlFor="frontReference">
                  Front reference
               </label>
               <input
                  className="form-control"
                  id="frontReference"
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        frontReference: e.target.value
                     })
                  }
                  placeholder="Type your reference"
                  type="text"
                  value={formData?.frontReference ?? ""}
               />
            </div>

            <div className="col-12 col-md-6">
               <label className="form-label" htmlFor="backReference">
                  Back reference (the answer)
               </label>
               <input
                  className="form-control"
                  id="backReference"
                  onChange={(e) =>
                     setFormData({ ...formData, backReference: e.target.value })
                  }
                  placeholder="Type the back reference for the card"
                  type="text"
                  value={formData?.backReference ?? ""}
               />
            </div>

            <div className="d-grid col-6 mx-auto">
               <button className="btn btn-outline-primary">Create card</button>
            </div>
         </form>
      </div>
   )
}

export default FormSubmit
