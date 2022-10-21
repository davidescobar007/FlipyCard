export const getRandomFromArray = (array) => {
   const random = Math.floor(Math.random() * array.length)
   return {
      random: array[random],
      cleanedArray: array.filter((item, index) => index !== random)
   }
}

export const toggleItemFromArray = (array, itemToToggle) => {
   let newArray = [...array]
   newArray.includes(itemToToggle)
      ? (newArray = newArray.filter((item) => item !== itemToToggle))
      : (newArray = [...array, itemToToggle])
   return newArray
}

export const creteDinamicObject = (array) => {
   let newObject = {}
   array.map((item) => {
      newObject[item] = true
   })
   return newObject
}

export const createDinamicArray = (array, operator) => {
   let newDinamicArray = []
   array.map((item) => {
      newDinamicArray.push({
         field: `category.${item}`,
         operator: operator,
         value: true
      })
   })
   return newDinamicArray
}
