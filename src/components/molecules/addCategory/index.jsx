/* eslint-disable react/forbid-component-props */
import { useContext, useRef } from "react"
import { HiViewGridAdd } from "react-icons/hi"

import { StoreContext } from "../../../context/global.state"
import Button from "../../atoms/button"
import Input from "../../atoms/input"
import Title from "../../atoms/title/title"
import Modal from "../modal"

function AddSection() {
   const { createNewCategory } = useContext(StoreContext)
   const inputRef = useRef()

   const handleSubmit = (e) => {
      e.preventDefault()
      createNewCategory(inputRef.current.value)
      inputRef.current.value = ""
   }

   return (
      <section className="my-3 flex justify-center">
         <label className="text-center" htmlFor="addCategory">
            <HiViewGridAdd
               className="inline rounded-full border-2 border-accent bg-secondary p-2 text-accent shadow-lg"
               size={45}
            />
            <Title
               extraClassName="font-semibold text-lg !text-accent"
               type="h4"
            >
               Add category
            </Title>
         </label>
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
               <Button extraClassname="btn-wide text-base-100" typeOf="PRIMARY">
                  Add category
               </Button>
            </form>
         </Modal>
      </section>
   )
}

export default AddSection
