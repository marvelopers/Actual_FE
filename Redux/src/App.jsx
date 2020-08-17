import React, { useEffect } from "react";
import RestaurantContainer from "./RestaurantContainer";
import { useDispatch } from "react-redux";
import { setRestaurants } from "./action";
import restaurants from "../fixtures/restaurants";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchEvent(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantContainer />
    </div>
  );
}
