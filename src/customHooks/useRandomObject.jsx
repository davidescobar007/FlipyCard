import { useEffect, useState } from "react"

import { getRandomFromArray } from "../utils"

function useRandomObjectFromArray(initialArray) {
   const [filteredArray, setFilteredArray] = useState([...initialArray])
   const [randomObject, setRandomObject] = useState(null)
   const [progressPercentage, setProgressPercentage] = useState(0)

   useEffect(() => {
      if (initialArray && initialArray.length > 0) {
         setFilteredArray([...initialArray])
      }
      if (progressPercentage === 0) {
         getRandomObject()
      }
   }, [initialArray])

   const filterArray = () => {
      const selectedObject = getRandomFromArray(filteredArray)
      const newFilteredArray = filteredArray.filter((item) => item !== selectedObject)
      setRandomObject(selectedObject)
      setFilteredArray(newFilteredArray)
   }

   const handleArrayProgress = () => {
      let length = initialArray.length
      let arrayLength = filteredArray.length - 1
      let percentage = (arrayLength / length) * 100
      percentage = 100 - percentage
      // if (percentage > 100) percentage = 0
      setProgressPercentage(Math.round(percentage))
   }

   const getRandomObject = () => {
      filterArray()
      handleArrayProgress()
      return
   }

   return { randomObject, getRandomObject, progressPercentage }
}

export default useRandomObjectFromArray
