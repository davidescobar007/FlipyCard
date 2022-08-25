export const getButtonColor = (itemSelected, currentItem) => {
   return itemSelected === currentItem ? "primary" : "light"
}

export const getRandomFromArray = (array) => {
   const random = Math.floor(Math.random() * array.length)
   return {
      random: array[random],
      cleanedArray: array.filter((item, index) => index !== random)
   }
}

export const toggleItemFromArray = (array, itemToToggle) => {
   let newArray = [...array]
   if (typeof itemToToggle === "string") {
      newArray.includes(itemToToggle)
         ? (newArray = newArray.filter((item) => item !== itemToToggle))
         : (newArray = [...array, itemToToggle])
   }
   return newArray
}
