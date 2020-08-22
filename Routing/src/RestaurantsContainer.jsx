import React from "react";
import { useSelector, useDispatch } from "react-redux";
import selectRestaurant from "./action";

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { restaurants, selectedRestaurant } = useSelector((state) => ({
    restaurants: state.restaurants,
    selectedRestaurant: state.selectedRestaurant,
  }));
  function handleClick(categoryId) {
    dispatch(selectRestaurant(categoryId));
  }
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button type="button" onClick={() => handleClick(restaurant.id)}>
            {restaurant.name}
            {selectedRestaurant && restaurant.id === selectedRestaurant.id
              ? "V"
              : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
