/* eslint-disable react/forbid-component-props */
import Button from "../../atoms/button"
import Title from "../../atoms/title/title"
import Modal from "../modal"
import Input from "../../atoms/input"
import { useContext, useRef } from "react"
import { StoreContext } from "../../../context/global.state"
import { HiViewGridAdd } from "react-icons/hi"

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
            <HiViewGridAdd className="inline" size={25} />
            <Title extraClassName="font-semibold text-sm text-success" type="h4">
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
               <Button extraClassname="btn-wide" type="submit">
                  Add category
               </Button>
            </form>
         </Modal>
      </section>
   )
}

export default AddSection
