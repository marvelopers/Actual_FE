import React, { useEffect } from "react";
import RestaurantContainer from "./RestaurantContainer";
import CategoriesContainer from "./CategoriesContainer";
import { useDispatch } from "react-redux";
import { setRestaurants, setCategories } from "./action";
import { fetchCategories } from "./sevices/api";
import restaurants from "../fixtures/restaurants";

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();
  //DO : fetch GET / categories
  //REST - CURD => Read - collection / member, element
  dispatch(setCategories(categories));
}

function loadRestaurants({ dispatch }) {
  const restaurants = [];
  //DO : load restaurants from API server.
  // 1. API server 확보
  // 2. fetch
  dispatch(setRestaurants(restaurants));
}

eatgo - customer - api.ahastudio.com / categories;

export default function App() {
  const dispatch = useDispatch();
  loadCategories({ dispatch });
  loadRestaurants({ dispatch });
  useEffect(() => {
    dispatchEvent(restaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantContainer />
    </div>
  );
}
