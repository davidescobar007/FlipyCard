export const getRandomFromArray = (array) => {
   const random = Math.floor(Math.random() * array.length)
   return {
      random: array[random]
   }
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
   return inputString.replace(/[.,#!$%^&*;:{}=\-_`~()?"'„“\\]/g, "")
}

export const transformData = (inputData) => {
   const transformedData = {
      data: []
   }

   for (const item of inputData) {
      const [german, spanish] = item.map((text) => text.replace(/<\/?b>/g, ""))

      transformedData.data.push({
         german: german,
         spanish: spanish
      })
   }

   return transformedData
}
