import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { getDataByQuery } from "../services";
import { getRandomFromArray } from "../utils/indes";
import Card from "./card";

const CardsContainer = () => {
  const [randomCard, setRandomCard] = useState();
  const { cards, setCards, categorySelected } = useContext(AppContext);

  const selectCategory = (item) => {
    getDataByQuery("cards", "category", item).then((data) => {
      console.log(data);
      handleRandomCard(data);
      setCards(data);
    });
  };

  const handleNextCard = (cardToBeDeleted) => {
    let cardsFiltered = cards.filter(
      (item) => item.frontReference !== cardToBeDeleted.frontReference
    );
    setCards(cardsFiltered);
    handleRandomCard(cardsFiltered);
  };

  const handleRandomCard = (cardList) => {
    const { random } = getRandomFromArray(cardList);
    setRandomCard(random);
  };

  useEffect(() => {
    selectCategory(categorySelected)
  }, [categorySelected]);

  return (
    <div>
      <div className="d-flex justify-content-center">
        {categorySelected && (
          <>
            <Card
              key={randomCard?.frontReference}
              section={`${categorySelected} - ${cards.length}`}
              frontReference={randomCard?.frontReference}
              backReference={randomCard?.backReference}
            />
          </>
        )}
      </div>
      <div className="d-grid col-6 mx-auto mt-5">
        {categorySelected ? (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              cards.length
                ? handleNextCard(randomCard)
                : selectCategory(categorySelected);
            }}
          >
            {cards.length ? "Next Card" : "Click me to flip again"}
          </button>
        ) : (
          <h5>Select a category</h5>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
