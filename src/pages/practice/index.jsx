import React from "react"
import { useContext } from "react"
import { useEffect } from "react"

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

   return <section className="flex justify-center ">{cards.length && <CardsOrg cards={cards} />}</section>
}

export default Practice
