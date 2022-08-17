import React, { useContext, useEffect, useState } from "react";
import Button from "./button";
import { getButtonColor } from "../utils/indes";
import { AppContext } from "../context";
import { getCollectionList, getDataByQuery } from "../services";

const CategorySelector = ({ size }) => {
  const {
    setCards,
    categories,
    setCategories,
    categorySelected,
    setCategorySelected,
    categoryId,
    setcategoryId,
  } = useContext(AppContext);

  const selectCategory = (item) => {
    setCategorySelected(item);
    getDataByQuery("cards", "categorySelected", item).then((data) => {
      setCards(data);
    });
  };

  useEffect(() => {
    getCollectionList("categories").then((data) => {
      const dataCleaned = data.map((item) => item.data.categoryList);
      const id = data.map((item) => item.id);
      setcategoryId(id[0]);
      setCategories(dataCleaned.flat().filter((item) => item !== ""));
    });
  }, []);

  return (
    <section className="mb-5">
      <Button
        isSelected={true}
        text={"Add new category. +"}
        size={size}
        color={"warning"}
        isModalTrigger={true}
      />
      {Array.isArray(categories) &&
        categories.map((item, index) => (
          <a
            key={index}
            href="#"
            style={{ textDecoration: "none" }}
            className={`me-2 ${
              categorySelected === item
                ? "text-primary fw-bold"
                : "text-secondary"
            }`}
            onClick={() => selectCategory(item)}
          >
            #{item}
          </a>
        ))}
    </section>
  );
};

export default CategorySelector;
