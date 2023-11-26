import { useEffect, useState } from "react"

const useLocalStoragePropertyExists = (propertyName) => {
   const [propertyExists, setPropertyExists] = useState(false)

   useEffect(() => {
      const checkPropertyExists = () => {
         const localStorageValue = localStorage.getItem(propertyName)
         setPropertyExists(!!localStorageValue)
      }
      checkPropertyExists()

      const handleStorageChange = () => {
         checkPropertyExists()
      }

      window.addEventListener("storage", handleStorageChange)

      return () => {
         window.removeEventListener("storage", handleStorageChange)
      }
   }, [])

   return propertyExists
}

export default useLocalStoragePropertyExists
