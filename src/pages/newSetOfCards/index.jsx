import { useContext, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/atoms/button"
import TextArea from "../../components/atoms/textArea"
import CategorySelector from "../../components/molecules/categorySelector"
import Modal from "../../components/molecules/modal"
import Table from "../../components/molecules/table"
import TableDataCell from "../../components/molecules/table/TableDataCell"
import TableRow from "../../components/molecules/table/TableRow"
import { StoreContext } from "../../context/global.state"
import { checkEveryHasString } from "../../utils"

const tHeadData = ["Front Term", "Answer"]
const initialListValue = [{ frontTerm: "", answer: "" }]

export default function NewSet() {
   const [cardsList, setCardsList] = useState(initialListValue)
   const {
      createCardsAtOnce,
      state: { selectedSection, categorySelected }
   } = useContext(StoreContext)
   const navigate = useNavigate()

   const handleChange = (event, index) => {
      const element = event["target"]
      const cardListCopy = [...cardsList]
      const card = { ...cardsList[index] }
      card[element.id] = element.value
      cardListCopy[index] = card
      setCardsList(cardListCopy)
   }

   const isFormOk = useMemo(() => checkEveryHasString(cardsList), [cardsList])

   const handleSubmit = () => {
      if (isFormOk) {
         createCardsAtOnce(cardsList)
         setCardsList(initialListValue)
         navigate("/")
      } else {
         alert("Please fill out all cards with text and answer")
      }
   }

   return (
      <>
         <CategorySelector />
         <div>
            <Table tableHeadProps={tHeadData}>
               <>
                  {cardsList.map((item, index) => (
                     <TableRow key={index}>
                        <TableDataCell>
                           <TextArea
                              id="frontTerm"
                              onChange={(event) => {
                                 handleChange(event, index)
                              }}
                              placeholder="Enter text"
                              rows={4}
                           />
                        </TableDataCell>

                        <TableDataCell>
                           <TextArea
                              id="answer"
                              onChange={(event) => {
                                 handleChange(event, index)
                              }}
                              placeholder="Enter the answer"
                              rows={4}
                           />
                        </TableDataCell>
                     </TableRow>
                  ))}
               </>
            </Table>
         </div>

         <div className="flex flex-wrap justify-between ">
            <Button
               extraClassname="w-full mt-5"
               onClick={() => setCardsList([...cardsList, initialListValue[0]])}
               type="button"
               typeOf="PRIMARY"
            >
               Add Card +
            </Button>

            <label
               className="btn btn-secondary my-7 border-2 border-accent text-neutral hover:text-white"
               htmlFor={isFormOk ? "addCards" : "addCardsWarning"}
            >
               Create
            </label>
            <Modal id="addCards" title="Confirm above info">
               <p className="py-4 text-lg">
                  These cards will be created under <b>{selectedSection?.section}</b> section with
                  following categories:{" "}
                  {categorySelected.map(({ id, name }) => (
                     <>
                        <b key={id}>{name}, </b>{" "}
                     </>
                  ))}
               </p>
               <div className="modal-action">
                  <label
                     className="btn btn-primary text-white"
                     htmlFor="addCards"
                     onClick={handleSubmit}
                  >
                     Create
                  </label>
               </div>
            </Modal>
         </div>
      </>
   )
}
