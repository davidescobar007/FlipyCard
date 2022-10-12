import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/global.state"
import ProgressPercentage from "./atomic/progressBar"
import Card from "./card"
import useSound from "use-sound"
import sound from "../../public/sound1.mp3"
import finishSound1 from "../../public/finishSound1.mp3"
function CardsContainer() {
   const {
      state: { cards, categorySelected, randomCard, dynamicCards },
      nextRandomCard,
      resetDynamicCards
   } = useContext(StoreContext)

   const [play] = useSound(sound, { volume: 0.15 })
   const [finishSound] = useSound(finishSound1, { volume: 0.15 })

   const calculateProgressPercentage = () => {
      let cardslength = cards.length
      let dynamicCardsLength = dynamicCards.length - 1
      let percentage = (dynamicCardsLength / cardslength) * 100
      return 100 - percentage
   }

   useEffect(() => {
      setTimeout(() => {
         if (dynamicCards.length > 0) {
            play()
            return
         }
         finishSound()
      }, 200)
   }, [randomCard])

   return (
      <div>
         {randomCard && (
            <ProgressPercentage value={calculateProgressPercentage()} />
         )}
         <div className="d-flex justify-content-center">
            {categorySelected && randomCard ? (
               <Card
                  backReference={randomCard?.backReference}
                  frontReference={randomCard?.frontReference}
                  isFirstCard={dynamicCards.length === cards.length}
               />
            ) : null}
         </div>
         <div className="d-grid col-6 mx-auto mt-5">
            {categorySelected ? (
               <button
                  className="btn btn-outline-light"
                  onClick={() => {
                     dynamicCards.length
                        ? nextRandomCard(randomCard)
                        : resetDynamicCards(cards)
                  }}
               >
                  {dynamicCards.length ? "Next" : "Click me to flip again"}
               </button>
            ) : (
               <h5>Select a category</h5>
            )}
         </div>
      </div>
   )
}

export default CardsContainer
