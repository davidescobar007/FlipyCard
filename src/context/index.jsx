import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const [categoryId, setcategoryId] = useState(null); //temporal to be improved
  const [cards, setCards] = useState([]);

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        categorySelected,
        setCategorySelected,
        categoryId,
        setcategoryId,
        cards,
        setCards,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
