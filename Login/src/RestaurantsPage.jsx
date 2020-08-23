import React, { useEffect } from "react";
import { loadInitialData } from "./action";
import { useDispatch } from "react-redux";
import RegionsContainer from "./RegionsContainer";
import CategoriesContainer from "./CategoriesContainer";
import RestaurantsContainer from "./RestaurantsContainer";

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
