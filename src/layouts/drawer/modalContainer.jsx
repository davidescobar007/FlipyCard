import { useContext, useRef } from "react"

import Button from "../../components/atoms/button"
import Input from "../../components/atoms/input"
import Modal from "../../components/molecules/modal"
import { StoreContext } from "../../context/global.state"

function MmodalContainer() {
   const { createNewCategory, createSection } = useContext(StoreContext)
   const categoryInputRef = useRef()
   const sectionInputRef = useRef()

   const submitNewCategory = (e) => {
      e.preventDefault()
      createNewCategory(categoryInputRef.current.value)
      categoryInputRef.current.value = ""
   }

   const submitNewSection = (e) => {
      e.preventDefault()
      createSection(sectionInputRef.current.value)
      sectionInputRef.current.value = ""
   }

   return (
      <section>
         <Modal id="addCategory" title="Add new category">
            <form
               className="flex flex-wrap justify-center"
               onSubmit={submitNewCategory}
            >
               <Input
                  extraClassName="my-5"
                  id="createCategoryInput"
                  innerRef={categoryInputRef}
                  name="createCategoryInput"
                  placeholder="New category name"
               />
               <Button
                  extraClassname="btn-wide text-base-100"
                  onClick={submitNewCategory}
                  typeOf="PRIMARY"
               >
                  Add category
               </Button>
            </form>
         </Modal>

         <Modal id="addSection" title="Add a new section">
            <form
               className="flex flex-wrap justify-center"
               onSubmit={submitNewSection}
            >
               <Input
                  extraClassName="my-5"
                  id="createCategoryInput"
                  innerRef={sectionInputRef}
                  name="createCategoryInput"
                  placeholder="New section name"
               />
               <Button
                  extraClassname="btn-wide"
                  onClick={submitNewSection}
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
