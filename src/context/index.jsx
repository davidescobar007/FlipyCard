/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react"
import PropTypes from "prop-types"

export const AppContext = createContext()

function AppContextProvider({ children }) {
   const [categories, setCategories] = useState([1, 2])
   const [categorySelected, setCategorySelected] = useState()
   const [categoryId, setCategoryId] = useState(null) //temporal to be improved
   const [cards, setCards] = useState([])

   const store = {
      categories,
      setCategories,
      categorySelected,
      setCategorySelected,
      categoryId,
      setCategoryId,
      cards,
      setCards,
   }

   return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

AppContextProvider.propTypes = {
   children: PropTypes.element,
}

export default AppContextProvider
