import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/atoms/button"
import TextArea from "../../components/atoms/textArea"
import Title from "../../components/atoms/title/title"
import CategorySelector from "../../components/molecules/categorySelector"
import Stat from "../../components/molecules/stat"
import Table from "../../components/molecules/table"
import TableDataCell from "../../components/molecules/table/TableDataCell"
import TableRow from "../../components/molecules/table/TableRow"
import { StoreContext } from "../../context/global.state"

const tHeadData = ["Front Term", "Answer"]
const initialListValue = [{ frontTerm: "", answer: "" }]

export default function NewSet() {
   const [cardsList, setCardsList] = useState(initialListValue)
   const {
      state: { selectedSection },
      createCardsAtOnce
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

   const handleSubmit = () => {
      createCardsAtOnce(cardsList)
      setCardsList(initialListValue)
      navigate("/")
   }

   useEffect(() => {}, [])

   return (
      <>
         <Title extraClassName="text-xl !text-neutral" type="h3">
            Select a category for the new set of cards
         </Title>
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

            <Stat NCards={cardsList.length} section={selectedSection} />

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
