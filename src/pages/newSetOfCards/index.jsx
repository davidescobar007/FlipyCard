import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/atoms/button"
import TextArea from "../../components/atoms/textArea"
import CategorySelector from "../../components/molecules/categorySelector"
import Table from "../../components/molecules/table"
import TableDataCell from "../../components/molecules/table/TableDataCell"
import TableRow from "../../components/molecules/table/TableRow"
import { StoreContext } from "../../context/global.state"

const tHeadData = ["Front Term", "Answer"]
const initialListValue = [{ frontTerm: "", answer: "" }]

export default function NewSet() {
   const [cardsList, setCardsList] = useState(initialListValue)
   const { createCardsAtOnce } = useContext(StoreContext)
   const navigate = useNavigate()

   const handleChange = (event, index) => {
      const element = event["target"]
      const cardListCopy = [...cardsList]
      const card = { ...cardsList[index] }
      card[element.id] = element.value
      cardListCopy[index] = card
      setCardsList(cardListCopy)
   }

   const handleSubmit = () => {
      createCardsAtOnce(cardsList)
      setCardsList(initialListValue)
      navigate("/")
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

            <Button
               extraClassname="my-7 border-2 border-accent"
               onClick={handleSubmit}
               type="button"
               typeOf="SECONDARY"
            >
               Create
            </Button>
         </div>
      </>
   )
}
