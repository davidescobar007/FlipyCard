import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { StoreContext } from "../../../context/global.state"

function CardsStats() {
   const { t } = useTranslation()
   const {
      getCardsList,
      state: { cards }
   } = useContext(StoreContext)
   const [easyCards, setEasyCards] = useState([])
   const [mediumCards, setMediumCards] = useState([])
   const [hardCards, setHardCards] = useState([])

   useEffect(() => {
      getCardsList()
   }, [])

   useEffect(() => {
      setEasyCards(cards.filter((card) => card.level === "easy"))
      setMediumCards(cards.filter((card) => card.level === "medium"))
      setHardCards(cards.filter((card) => card.level === "hard"))
   }, [cards])

   return (
      <div className="stats mb-6 w-full shadow">
         <div className="stat place-items-center p-1 py-3">
            <div className="stat-title font-medium">🙂 {t("practice.cardStat.easy")}</div>
            <div className="stat-value cursor-pointer select-none text-accent">{easyCards.length}</div>
            <div className="stat-desc mt-1 text-sm">{t("practice.cards")}</div>
         </div>
         <div className="stat place-items-center p-1 py-3">
            <div className="stat-title font-medium">🤔 {t("practice.cardStat.medium")}</div>
            <div className="stat-value cursor-pointer select-none text-primary">{mediumCards.length}</div>
            <div className="stat-desc mt-1 text-sm">{t("practice.cards")}</div>
         </div>

         <div className="stat place-items-center p-1 py-3">
            <div className="stat-title font-medium">😰 {t("practice.cardStat.hard")}</div>
            <div className="stat-value cursor-pointer select-none text-warning">{hardCards.length}</div>
            <div className="stat-desc mt-1 text-sm">{t("practice.cards")}</div>
         </div>
      </div>
   )
}

export default CardsStats
