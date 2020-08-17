import React from "react";
import Restaurants from "./Restaurants";
import { useSelector } from "react-redux";

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));
  //

  return <Restaurants restaurants={restaurants} />;
}
