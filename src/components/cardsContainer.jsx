import React, { useContext } from "react"
import Card from "./card"
import { StoreContext } from "../context/global.state"

function CardsContainer() {
   const {
      state: { cards, categorySelected, randomCard },
      nextRandomCard,
      getCardsListByCategories
   } = useContext(StoreContext)

   return (
      <div>
         <div className="d-flex justify-content-center">
            {categorySelected ? (
               <Card
                  backReference={randomCard?.backReference}
                  frontReference={randomCard?.frontReference}
                  key={randomCard?.frontReference}
                  section={`${categorySelected} - ${cards.length}`}
               />
            ) : null}
         </div>
         <div className="d-grid col-6 mx-auto mt-5">
            {categorySelected ? (
               <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                     cards.length
                        ? nextRandomCard(randomCard)
                        : getCardsListByCategories(categorySelected)
                  }}
               >
                  {cards.length ? "Next Card" : "Click me to flip again"}
               </button>
            ) : (
               <h5>Select a category</h5>
            )}
         </div>
      </div>
   )
}

export default CardsContainer
