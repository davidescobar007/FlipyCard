export const getRandomFromArray = (array) => {
   const random = Math.floor(Math.random() * array.length)
   return array[random]
}

export const getSortedObjectKeys = (obj) =>
   Object.keys(obj)
      .sort()
      .reduce((accumulator, key) => {
         accumulator[key] = obj[key]
         return accumulator
      }, {})

export const toggleItemFromArray = (array, itemToToggle) => {
   let newArray = [...array]
   const isItemInArray = newArray.some((item) => item.id === itemToToggle.id)
   isItemInArray
      ? (newArray = newArray.filter((item) => item.id !== itemToToggle.id))
      : (newArray = [...array, itemToToggle])
   return newArray
}

export const creteDinamicObject = (array) => {
   let newObject = {}
   array.map((item) => {
      newObject[item.name] = item.id
   })
   return newObject
}

export const createDinamicArray = (array, operator) => {
   let newDinamicArray = []
   array.map((item) => {
      newDinamicArray.push({
         field: `category.${item.name}`,
         operator: operator,
         value: item.id
      })
   })
   return newDinamicArray
}

export const createDynamicArrayOfCards = (listofCards, category) => {
   let arr = []
   listofCards.map((item) => {
      arr.push({
         frontTerm: item.frontTerm,
         answer: item.answer,
         timesSeen: 0,
         categoryID: category
      })
   })
   return arr
}

export const updateObjInsideOfArray = (array, obj) => {
   const newIteratedArray = array.map((item) => {
      if (item.id === obj.id) {
         item = obj
      }
      return item
   })
   return newIteratedArray
}

export const checkEveryHasString = (array) => {
   const isArrayEmpty = array.some((item) => item.answer !== "" && item.frontTerm !== "")
   return isArrayEmpty
}

export const queryStringAnsembler = (field, array) => {
   let queryString = ""
   array.map(({ id }, index) => {
      queryString += `${field} ?~ "${id}" ${index !== array.length - 1 ? "&& " : ""}`
   })
   return queryString
}

export const removePunctuation = (inputString) => {
   return inputString.replace(/[.,#!$%^&*;:{}=\-_`~()?"'„“\\\r\n]/g, "")
}

export const extractAndSortSentences = (inputData) => {
   const transformedData = { data: [] }

   inputData.slice(0, 3).forEach((item) => {
      const sentences = item?.sentences
      if (sentences) {
         const firstFiveShortest = sentences
            .map((sentence) => {
               if (Array.isArray(sentence) && sentence.length >= 2) {
                  return {
                     german: sentence[0].replace(/<\/?b>/g, ""),
                     spanish: sentence[1].replace(/<\/?b>/g, "")
                  }
               }
               return null
            })
            .filter((sentence) => sentence !== null)
            .sort((a, b) => a.german.length - b.german.length)
            .slice(0, 5)

         transformedData.data = transformedData.data
            .concat(firstFiveShortest)
            .sort((a, b) => a.german.length - b.german.length)
      }
   })

   return transformedData
}

export function debounce(func, delay = 500) {
   let timeoutId

   return function (...args) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
         func.apply(this, args)
      }, delay)
   }
}

export function areObjectsDistinct(obj1, obj2) {
   const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
   for (const key of keys) {
      if (obj1[key] !== obj2[key]) {
         // TODO: uncomment following line when checking for differences between two objects
         // TODO: when committing, this must be always commented
         // console.log(`Difference in ${key}: ${obj1[key]} !== ${obj2[key]}`)
         return true
      }
   }
   return false
}
