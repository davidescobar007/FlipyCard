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
   const isItemInArray = newArray.some(
      (item) => item.id === itemToToggle.id
   )
   isItemInArray
      ? (newArray = newArray.filter((item) => item.id !== itemToToggle.id))
      : (newArray = [...array, itemToToggle])
   return newArray
}

export const creteDinamicObject = (array) => {
   let newObject = {}
   array.map((item) => {
      newObject[item.name] = true
   })
   return newObject
}

export const createDinamicArray = (array, operator) => {
   let newDinamicArray = []
   array.map((item) => {
      newDinamicArray.push({
         field: `category.${item.name}`,
         operator: operator,
         value: true
      })
   })
   return newDinamicArray
}

export const createDynamicArrayOfCards = (listofCards, section, callBack) => {
   let arr = []
   listofCards.map((item) => {
      arr.push({
         frontTerm: item.frontTerm,
         answer: item.answer,
         userId: "",
         timesSeen: 0,
         section,
         category: callBack
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
