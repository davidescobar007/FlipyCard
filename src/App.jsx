import { useState, useEffect, useContext } from "react";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Collapse from "./components/collapse";
import Modal from "./components/modal";
import { getCollectionList } from "./services";
import AppContextProvider, { AppContext } from "./context";
import CategorySelector from "./components/categorySelector";
import CardsContainer from "./components/cardsContainer";

function App() {
 

  return (
    <AppContextProvider>
      <div className="App">
        <Navbar></Navbar>
        <main className="container">
          <Collapse></Collapse>
          <CategorySelector></CategorySelector>
          <CardsContainer></CardsContainer>
          <Modal></Modal>
        </main>
      </div>
    </AppContextProvider>
  );
}

export default App;
