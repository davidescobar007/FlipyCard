import { useContext, useRef } from "react"

import Button from "../../components/atoms/button"
import Input from "../../components/atoms/input"
import Modal from "../../components/molecules/modal"
import { StoreContext } from "../../context/global.state"

function MmodalContainer() {
   const { createNewCategory } = useContext(StoreContext)
   const inputRef = useRef()

   const handleSubmit = (e) => {
      e.preventDefault()
      createNewCategory(inputRef.current.value)
      inputRef.current.value = ""
   }

   return (
      <section>
         <Modal id="addCategory" title="Add new category">
            <form
               className="flex flex-wrap justify-center"
               onSubmit={handleSubmit}
            >
               <Input
                  extraClassName="my-5"
                  id="createCategoryInput"
                  innerRef={inputRef}
                  name="createCategoryInput"
                  placeholder="New category name"
               />
               <Button
                  extraClassname="btn-wide text-base-100"
                  onClick={handleSubmit}
                  typeOf="PRIMARY"
               >
                  Add category
               </Button>
            </form>
         </Modal>

         <Modal id="addSection" title="Add a new section">
            <form
               className="flex flex-wrap justify-center"
               onSubmit={handleSubmit}
            >
               <Input
                  extraClassName="my-5"
                  id="createCategoryInput"
                  innerRef={inputRef}
                  name="createCategoryInput"
                  placeholder="New section name"
               />
               <Button
                  extraClassname="btn-wide"
                  onClick={handleSubmit}
                  typeOf="PRIMARY"
               >
                  Add section
               </Button>
            </form>
         </Modal>
      </section>
   )
}

export default MmodalContainer
