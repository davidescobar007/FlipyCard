import { useContext } from "react"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { PracticeLoader } from "../../components/atoms/loader"
import Title from "../../components/atoms/title/title"
import CardsOrg from "../../components/Organisms/cardsOrg"
import { StoreContext } from "../../context/global.state"
import { useLocalStorage } from "../../customHooks/useLocalStorage"
function Practice() {
   const { t } = useTranslation()
   const {
      getCardsList,
      state: {
         cards,
         user,
         isLoading: { cards: isLoadingCards }
      }
   } = useContext(StoreContext)

   const [localStorageLevel] = useLocalStorage("selectedLevel", "")

   useEffect(() => {
      if (user.id) {
         getCardsList(true, localStorageLevel ? localStorageLevel : null)
      }
   }, [user])

   return (
      <section className="flex justify-center ">
         {isLoadingCards ? (
            <PracticeLoader />
         ) : cards.length > 0 ? (
            <CardsOrg cards={cards} />
         ) : (
            <Title extraClassName="text-xl font-semibold mb-3" type="h3">
               {t("practice.noVocabulary")}
            </Title>
         )}
      </section>
   )
}

export default Practice
