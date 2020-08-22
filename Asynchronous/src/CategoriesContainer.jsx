import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCatrgory, loadRestaurants } from "./action";

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCatrgory } = useSelector((state) => ({
    categories: state.categories,
    selectedCatrgory: state.selectedCatrgory,
  }));
  function handleClick(categoryId) {
    dispatch(selectCatrgory(categoryId));
    dispatch(loadRestaurants(categoryId));
  }
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => handleClick(category.id)}>
            {category.name}
            {selectedCatrgory && category.id === selectCatrgory.id ? "V" : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
