import { fetchCategories } from "./sevices/api";

export function setRestaurants(restaurants) {
  return {
    type: "setRestaurants",
    payload: {
      restaurants,
    },
  };
}
// todo delete
export function delete(restaurants) {
  return {
    type: "setRestaurants",
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = [];
    //DO : fetch GET / categories
    dispatch(setRestaurants(restaurants));
  };
}

export function setCategories(categories) {
  return {
    type: "setCategories",
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    //DO : fetch GET / categories
    //REST - CURD => Read - collection / member, element
    dispatch(setCategories(categories));
  };
}
