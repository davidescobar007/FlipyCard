import Table from "../../components/table"
import Button from "../../components/button"
import { useState } from "react"
import TableDataCell from "../../components/table/TableDataCell"
import TableRow from "../../components/table/TableRow"
import "./index.scss"
import CustomInputComponent from "./customInputComponent"

const tHeadData = ["Front Term", "Answer"]
const initialListValue = [{ frontTerm: "", answer: "" }]

export default function NewSet() {
   const [cardsList, setCardsList] = useState(initialListValue)

   const handleChange = (event, index) => {
      const element = event["target"]
      const cardListCopy = [...cardsList]
      const card = { ...cardsList[index] }
      card[element.id] = element.innerText
      cardListCopy[index] = card
      setCardsList(cardListCopy)
   }

   return (
      <>
         <Table tableHeadProps={tHeadData}>
            <>
               {cardsList.map((item, index) => (
                  <TableRow
                     extraClassName={index % 2 === 0 ? "bg-white" : ""}
                     key={index}
                  >
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
               extraClassname="content-end my-5"
               onClick={() => {}}
               type="button"
               typeOf="INFO"
            >
               Create
            </Button>
         </div>
      </>
   )
}
