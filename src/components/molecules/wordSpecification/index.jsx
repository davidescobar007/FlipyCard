/* eslint-disable react/forbid-component-props */
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { RiSave2Fill, RiSave2Line } from "react-icons/ri"
import { Link, useParams } from "react-router-dom"

import { StoreContext } from "../../../context/global.state"
import Button from "../../atoms/button"
import Loader from "../../atoms/loader"
import Title from "../../atoms/title/title"
export default function WordSpecification() {
   const { t } = useTranslation()
   const {
      saveVocabularyToStudy,
      handleErrorModal,
      state: {
         selectedWord,
         selectedWordTranslation,
         user,
         isLoading: { wordTranslation }
      }
   } = useContext(StoreContext)

   const [isTranslationSaved, setIsTranslationSaved] = useState(false)
   let { id } = useParams()

   const handleSaveTranslation = () => {
      if (!user) {
         handleErrorModal(t("constants.needSignUp"))
      }
      if (selectedWordTranslation?.id && user) {
         saveVocabularyToStudy()
         setIsTranslationSaved(true)
      }
   }

   useEffect(() => {
      setIsTranslationSaved(false)
   }, [selectedWord])

   const objectHasOwnKey = Object.keys(selectedWordTranslation?.examples || {}).some(
      (key) => selectedWordTranslation?.examples[key] === ""
   )

   return (
      <div className="fixed md:right-5 md:w-8/32 lg:w-5/24 xl:w-6/32 2xl:right-32">
         <section className=" flex flex-wrap justify-between rounded-2xl border-2 border-accent bg-secondary p-2 ">
            {selectedWord ? (
               <>
                  <Title extraClassName="text-xl underline w-10/12 font-medium" type="h3">
                     {selectedWord}
                  </Title>
                  <div
                     className="right-5 mt-1 flex w-2/12 cursor-pointer justify-end"
                     onClick={handleSaveTranslation}
                  >
                     <label className="">
                        {isTranslationSaved ? (
                           <RiSave2Fill className="swap-on h-6 w-6 fill-current" />
                        ) : (
                           <RiSave2Line className="swap-off h-6 w-6 fill-current" />
                        )}
                     </label>
                  </div>
                  <div className="mt-3">
                     {wordTranslation ? (
                        <Loader />
                     ) : (
                        <>
                           <Title extraClassName="font-medium text-lg" type="h4">
                              *{selectedWordTranslation?.spanish_translation || ""}
                           </Title>

                           <p className="text-md mt-4 text-justify font-normal">
                              <span className="font-medium">Z.B. </span>
                              {!objectHasOwnKey && selectedWordTranslation?.examples?.data[1]?.german}
                           </p>
                        </>
                     )}
                  </div>
               </>
            ) : (
               <Title extraClassName="text-lg  w-10/12 font-medium" type="h3">
                  {t("learn.wordSpecification")}
               </Title>
            )}
         </section>
         <div className=" mt-3">
            <Link to={`/quiz/${id}`}>
               <Button>{t("learn.startQuiz")} 📝</Button>
            </Link>
         </div>
      </div>
   )
}
