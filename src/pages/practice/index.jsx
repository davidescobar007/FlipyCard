import React from "react"
import { useContext } from "react"
import { useEffect } from "react"

import Title from "../../components/atoms/title/title"
import CardsOrg from "../../components/Organisms/cardsOrg"
import { StoreContext } from "../../context/global.state"
function Practice() {
   const {
      getCardsList,
      state: { cards }
   } = useContext(StoreContext)

   useEffect(() => {
      getCardsList()
   }, [])

   return (
      <section className="flex justify-center ">
         {cards.length > 0 ? (
            <CardsOrg cards={cards} />
         ) : (
            <Title extraClassName="text-xl font-semibold mb-3" type="h3">
               Aun no tienes vocabulario guardado en tu libreria
            </Title>
         )}
      </section>
   )
}

export default Practice
