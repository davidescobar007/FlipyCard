import { useState } from "react"
import PropTypes from "prop-types"

import useRandomObjectFromArray from "../../../customHooks/useRandomObject"
import Button from "../../atoms/button"
import ProgressPercentage from "../../atoms/progressBar"
import Title from "../../atoms/title/title"
import InputCheckGroup from "../inputCheckGroup"

export default function QuizQuestion({ arrayOfQuestions }) {
   const { randomObject, getRandomObject, progressPercentage } = useRandomObjectFromArray(arrayOfQuestions)
   const [checkedOption, setCheckedOption] = useState()
   const [isOptionRated, setIsOptionRated] = useState(false)
   const [totalRating, setTotalRating] = useState(0)

   const checkAnswerifCorrect = () => {
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
   // ipconfig | findstr IPv4
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
               <Button onClick={() => checkAnswerifCorrect()}>Check Answer</Button>
            </>
         ) : (
            <Title extraClassName="font-medium text-2xl mb-5 animate__animated animate__backInRight">
               You got {totalRating} right out of {arrayOfQuestions.length}. Your score is:{" "}
               <span className="font-bold">{(totalRating * 100) / arrayOfQuestions.length}</span>
            </Title>
         )}
      </div>
   )
}
QuizQuestion.defaultProps = {}

QuizQuestion.propTypes = {
   arrayOfQuestions: PropTypes.array.isRequired
}
