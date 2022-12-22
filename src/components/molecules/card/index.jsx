import React, { useContext, useEffect } from "react"
import { StoreContext } from "../../../context/global.state"
import ProgressPercentage from "../../atoms/progressBar"
import Card from "./card"
import useSound from "use-sound"
import sound from "../../../../public/sound1.mp3"
import finishSound1 from "../../../../public/finishSound1.mp3"
import Button from "../../atoms/button"

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
      <section>
         {randomCard && (
            <ProgressPercentage value={calculateProgressPercentage()} />
         )}
         <div className="d-flex justify-content-center">
            {categorySelected && randomCard ? (
               <Card
                  backReference={randomCard?.answer}
                  frontReference={randomCard?.frontTerm}
                  isFirstCard={dynamicCards.length === cards.length}
               />
            ) : null}
         </div>
         <div className="mt-6 flex justify-center">
            {categorySelected ? (
               <Button
                  onClick={() => {
                     dynamicCards.length
                        ? nextRandomCard(randomCard)
                        : resetDynamicCards(cards)
                  }}
               >
                  {dynamicCards.length ? "Next" : "Click me to flip again"}
               </Button>
            ) : (
               <h5>Select a category</h5>
            )}
         </div>
      </section>
   )
}

export default CardsContainer
