/* eslint-disable react/forbid-component-props */
import { useContext, useEffect, useState } from "react"
import { RiSave2Fill, RiSave2Line } from "react-icons/ri"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import { constants } from "../../../context/global.types"
import Badge from "../../atoms/badge"
import Title from "../../atoms/title/title"

export default function ImageCard({ image, title, level }) {
   const {
      handleErrorModal,
      saveVocabularyToStudy,
      state: { selectedWord, selectedWordTranslation, user }
   } = useContext(StoreContext)
   const [isTranslationSaved, setIsTranslationSaved] = useState(false)

   const handleSaveTranslation = () => {
      if (!user) {
         handleErrorModal(constants.NEED_SIGN_UP)
      }
      if (selectedWordTranslation?.id && user) {
         saveVocabularyToStudy()
         setIsTranslationSaved(true)
      }
   }

   useEffect(() => {
      setIsTranslationSaved(false)
   }, [selectedWord])

   return (
      <article
         className="flex h-44 flex-wrap bg-cover p-3"
         style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5003342401413691) 0%, rgba(65,65,65,0.35747709728422616) 100%), url(${image})`
         }}
      >
         <Title extraClassName="text-2xl w-full text-start text-white leading-7 font-medium" type="h3">
            {title}
         </Title>
         <div className="mt-2 w-11/12">
            <Title extraClassName="text-xl text-start text-white underline font-medium" type="h3">
               {selectedWord}
            </Title>
         </div>
         {selectedWord && (
            <label className=" mt-2 w-1/12 justify-end" onClick={handleSaveTranslation}>
               {isTranslationSaved ? (
                  <RiSave2Fill className="swap-on h-8 w-8 fill-current text-white" />
               ) : (
                  <RiSave2Line className="swap-off h-8 w-8 fill-current text-white" />
               )}
            </label>
         )}
         <Title extraClassName="text-lg text-white w-full text-start font-medium" type="h4">
            {selectedWordTranslation?.spanish_translation || ""}
         </Title>
         <div className="flex w-full justify-end">
            {level.map((item) => (
               <Badge key={item}>{item}</Badge>
            ))}
         </div>
      </article>
   )
}

ImageCard.defaultProps = {
   level: []
}

ImageCard.propTypes = {
   image: PropTypes.string.isRequired,
   level: PropTypes.array,
   title: PropTypes.string.isRequired
}
