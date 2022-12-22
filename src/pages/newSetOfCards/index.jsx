import Table from "../../components/molecules/table"
import Button from "../../components/atoms/button"
import { useState } from "react"
import TableDataCell from "../../components/molecules/table/TableDataCell"
import TableRow from "../../components/molecules/table/TableRow"
import CustomInputComponent from "./customInputComponent"
import Title from "../../components/atoms/title/title"
import CategorySelector from "../../components/molecules/categorySelector"
import { useContext } from "react"
import { StoreContext } from "../../context/global.state"
import { useNavigate } from "react-router-dom"

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
      card[element.id] = element.innerText
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
         <Title
            extraClassName="my-3 text-lg text-primary font-semibold"
            type="h3"
         >
            Select a category for the new set of cards
         </Title>
         <CategorySelector />
         <Table tableHeadProps={tHeadData}>
            <>
               {cardsList.map((item, index) => (
                  <TableRow key={index}>
                     <TableDataCell>
                        <CustomInputComponent
                           id="frontTerm"
                           onInput={(event) => {
                              handleChange(event, index)
                           }}
                        />
                     </TableDataCell>

                     <TableDataCell>
                        <CustomInputComponent
                           id="answer"
                           onInput={(event) => {
                              handleChange(event, index)
                           }}
                        />
                     </TableDataCell>
                  </TableRow>
               ))}
            </>
         </Table>
         <div className="flex flex-wrap justify-end">
            <Button
               extraClassname="w-full mt-5"
               onClick={() => setCardsList([...cardsList, initialListValue[0]])}
               type="button"
               typeOf="PRIMARY"
            >
               Add Card +
            </Button>

            <Button
               extraClassname="my-7"
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
