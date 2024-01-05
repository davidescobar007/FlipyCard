import { useState } from "react"

export function useLocalStorage(itemName, initialValue) {
   const localStorageItem = localStorage.getItem(itemName)
   let parsedItem

   if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue
   } else {
      parsedItem = JSON.parse(localStorageItem)
   }

   const [item, setItem] = useState(parsedItem)

   const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
   }

   const clearItem = () => {
      localStorage.removeItem(itemName)
      setItem(null)
   }

   return [item, saveItem, clearItem]
}
