import { useContext, useState } from "react"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"

import { StoreContext } from "../../../context/global.state"
import useRandomObjectFromArray from "../../../customHooks/useRandomObject"
import { getPercentage } from "../../../utils"
import Button from "../../atoms/button"
import ProgressPercentage from "../../atoms/progressBar"
import Title from "../../atoms/title/title"
import InputCheckGroup from "../../molecules/inputCheckGroup"
export default function QuizQuestion({ arrayOfQuestions }) {
   const { t } = useTranslation()
   const {
      updateUserScore,
      state: { user }
   } = useContext(StoreContext)
   const { randomObject, getRandomObject, filteredArrayLength, filteringComplete } =
      useRandomObjectFromArray(arrayOfQuestions)
   const [checkedOption, setCheckedOption] = useState()
   const [isOptionRated, setIsOptionRated] = useState(false)
   const [totalRating, setTotalRating] = useState(0)
   const progressPercentage = getPercentage(filteredArrayLength, arrayOfQuestions.length)
   const checkAnswerIfCorrect = () => {
      setTimeout(() => {
         getRandomObject()
         setIsOptionRated(false)
      }, 2000)
      setIsOptionRated(true)
   }

   const updateCheckedOption = (option) => {
      setCheckedOption(option)
      if (option === randomObject?.correct_answer) {
         setTotalRating(totalRating + 1)
      }
   }

   useEffect(() => {
      if (filteringComplete) {
         const score = (totalRating * 100) / arrayOfQuestions.length
         updateUserScore(user.id, score)
      }
   }, [filteringComplete])

   const handleInputState = (inputValue) => {
      let inputState = ""
      if (inputValue === checkedOption) {
         inputState = "selected"
         if (isOptionRated && checkedOption === randomObject.correct_answer) {
            inputState = "success"
         } else if (isOptionRated && checkedOption !== randomObject.correct_answer) {
            inputState = "error"
         }
      }
      return inputState
   }
   return (
      <div className="">
         {randomObject?.question ? (
            <>
               <ProgressPercentage value={progressPercentage} />
               <Title extraClassName="font-medium text-xl">{randomObject.question}</Title>
               {Object.keys(randomObject).map((key) => {
                  if (key.startsWith("option_")) {
                     return (
                        <InputCheckGroup
                           checked={checkedOption === randomObject[key]}
                           inputState={handleInputState(randomObject[key])}
                           key={key}
                           name="radio-1"
                           onChange={() => updateCheckedOption(randomObject[key])}
                           text={randomObject[key]}
                           value={randomObject[key]}
                        />
                     )
                  }
               })}
               <Button onClick={() => checkAnswerIfCorrect()}>{t("quiz.checkAnswer")}</Button>
            </>
         ) : (
            <Title extraClassName="font-medium text-2xl mb-5 animate__animated animate__backInRight">
               {t("quiz.quizResult", { totalRating, numberOfQuestions: arrayOfQuestions.length })}
               <span className="font-bold">{Math.round((totalRating * 100) / arrayOfQuestions.length)}</span>
            </Title>
         )}
      </div>
   )
}
QuizQuestion.defaultProps = {}

QuizQuestion.propTypes = {
   arrayOfQuestions: PropTypes.array.isRequired
}
