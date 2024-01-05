import { useState } from "react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import useSound from "use-sound"

import { StoreContext } from "../../../context/global.state"
import { useLocalStorage } from "../../../customHooks/useLocalStorage"
import useRandomObjectFromArray from "../../../customHooks/useRandomObject"
import CardFlipper from "../../../features/flipCard"
import { getPercentage } from "../../../utils"
import Button from "../../atoms/button"
import ProgressPercentage from "../../atoms/progressBar"
import BadgeListMolecule from "../../molecules/badgeList"
import CardsStats from "../../molecules/cardsStats"
import FlipCard from "../../molecules/flipCard"

import cardSound from "/cardSound.mp3"
import flipSound from "/flipSound.mp3"

function CardsOrg({ cards }) {
   const { t } = useTranslation()
   let { randomObject, getRandomObject, filteredArrayLength, filteringComplete } = useRandomObjectFromArray(cards)
   const [localStorageLevel, setLocalStorageLevel] = useLocalStorage("selectedLevel", "")

   const [isFlipped, setIsFlipped] = useState(false)
   const [animation, setAnimation] = useState("")
   const { german_translation, spanish_translation } = randomObject?.expand?.word_id || {}

   const levelTranslations = [
      { label: t("practice.cardStat.easy"), value: "easy" },
      { label: t("practice.cardStat.medium"), value: "medium" },
      { label: t("practice.cardStat.hard"), value: "hard" }
   ]
   const { updateCard, getCardsList } = useContext(StoreContext)
   const percentage = getPercentage(filteredArrayLength, cards.length)
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

   const getCardsByLevel = (event) => {
      const selectedLevelTarget = event.target.dataset["value"]
      setLocalStorageLevel(selectedLevelTarget)
      if (localStorageLevel !== selectedLevelTarget) {
         getCardsList(true, selectedLevelTarget)
      }
   }

   return (
      <main className="w-full content-center lg:w-10/12">
         {!randomObject && filteringComplete ? (
            <div className="flex columns-1 flex-col justify-center">
               <CardsStats />
               {/* TODO: onclick to restart  useRandomObjectFromArray customHook*/}
               <Button onClick={() => location.reload()}>{t("practice.startAgain")}</Button>
            </div>
         ) : (
            randomObject && (
               <>
                  <BadgeListMolecule
                     itemsArray={levelTranslations}
                     onClick={getCardsByLevel}
                     selectedItem={localStorageLevel}
                  />
                  <ProgressPercentage value={percentage} />
                  <div className={animation}>
                     <CardFlipper isFlipped={isFlipped}>
                        <FlipCard message={german_translation || ""} onClick={handleFlip} />
                        <FlipCard message={spanish_translation || ""} onClick={handleFlip} />
                     </CardFlipper>
                  </div>
                  <footer className="mt-6 flex w-full content-between justify-center">
                     <div className="btn-group flex gap-1 md:gap-3">
                        <button
                           className="btn btn-outline btn-accent px-2 md:px-4"
                           onClick={() => handleNextCard("easy")}
                        >
                           <span className="text-lg">🙂</span>
                           {levelTranslations[0]["label"]}
                        </button>
                        <button
                           className="btn btn-outline btn-primary px-2 md:px-4"
                           onClick={() => handleNextCard("medium")}
                        >
                           <span className="text-lg">🤔</span> {levelTranslations[1]["label"]}
                        </button>
                        <button
                           className="btn btn-outline btn-warning px-2 md:px-4"
                           onClick={() => handleNextCard("hard")}
                        >
                           <span className="text-lg">😰</span> {levelTranslations[2]["label"]}
                        </button>
                     </div>
                  </footer>
               </>
            )
         )}
      </main>
   )
}

CardsOrg.propTypes = {
   cards: PropTypes.array.isRequired
}
export default CardsOrg
