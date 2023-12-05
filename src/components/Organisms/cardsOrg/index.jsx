import { useState } from "react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import useSound from "use-sound"

import { StoreContext } from "../../../context/global.state"
import useRandomObjectFromArray from "../../../customHooks/useRandomObject"
import CardFlipper from "../../../features/flipCard"
import Button from "../../atoms/button"
import ProgressPercentage from "../../atoms/progressBar"
import CardsStats from "../../molecules/cardsStats"
import FlipCard from "../../molecules/flipCard"

import cardSound from "/cardSound.mp3"
import flipSound from "/flipSound.mp3"

function CardsOrg({ cards }) {
   const { t } = useTranslation()
   const { randomObject, getRandomObject, progressPercentage } = useRandomObjectFromArray(cards)
   const [isFlipped, setIsFlipped] = useState(false)
   const [animation, setAnimation] = useState("")
   const { german_translation, spanish_translation } = randomObject?.expand?.word_id || {}

   const { updateCard } = useContext(StoreContext)

   const [playFlipSound] = useSound(flipSound, { volume: 0.1 })
   const [playCardSound] = useSound(cardSound, { volume: 0.08 })

   const handleFlip = () => {
      setIsFlipped(!isFlipped)
      setTimeout(() => {
         playFlipSound()
      }, 250)
   }

   const handleNextCard = (level) => {
      const cardCopy = { ...randomObject }
      cardCopy.level = level
      setAnimation("blur-out")
      playCardSound()
      updateCard(cardCopy)
      setTimeout(() => {
         getRandomObject()
         setAnimation("")
      }, 401)
   }

   return (
      <main className="w-full content-center lg:w-10/12">
         {!randomObject && progressPercentage > 100 ? (
            <div className="flex columns-1 flex-col justify-center">
               <CardsStats />
               {/* TODO: onclick to restart  useRandomObjectFromArray customhook*/}
               <Button onClick={() => location.reload()}>{t("practice.startAgain")}</Button>
            </div>
         ) : (
            randomObject && (
               <>
                  <ProgressPercentage value={progressPercentage} />
                  <div className={animation}>
                     <CardFlipper isFlipped={isFlipped}>
                        <FlipCard message={german_translation || ""} onClick={handleFlip} />
                        <FlipCard message={spanish_translation || ""} onClick={handleFlip} />
                     </CardFlipper>
                  </div>
                  <footer className="mt-6 flex w-full content-between justify-center">
                     <div className="btn-group">
                        <button className="btn btn-outline btn-accent" onClick={() => handleNextCard("easy")}>
                           <span className="text-lg">🙂</span>
                           {t("practice.cardStat.easy")}
                        </button>
                        <button
                           className="btn btn-outline btn-primary mx-1"
                           onClick={() => handleNextCard("medium")}
                        >
                           <span className="text-lg">🤔</span> {t("practice.cardStat.medium")}
                        </button>
                        <button className="btn btn-outline btn-warning" onClick={() => handleNextCard("hard")}>
                           <span className="text-lg">😰</span> {t("practice.cardStat.hard")}
                        </button>
                     </div>
                  </footer>
               </>
            )
         )}
      </main>
   )
}

CardsOrg.defaultProps = {}

CardsOrg.propTypes = {
   cards: PropTypes.array.isRequired
}
export default CardsOrg
