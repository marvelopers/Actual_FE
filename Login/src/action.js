import { fetchRegions, fetchCategories, fetchRestaurants } from "./sevices/api";

export function setRegions(regions) {
  return {
    type: "setRegions",
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: "setCategories",
    payload: { categories },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: "setRestaurants",
    payload: { restaurants },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function selectRegion(regionId) {
  return {
    type: "selectRegion",
    payload: { regionId },
  };
}

export function selectCategory(categoryId) {
  return {
    type: "selectCategory",
    payload: { categoryId },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectRegion: region, selectRegion: category } = getState;

    if (!region || !category) {
      return;
    }
    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function selectRestaurant(restaurantId) {
  return {
    type: "selectRestaurant",
    payload: { restaurantId },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    dispatch(requestLogin(getState));
  };
}
export function changeLoginField({ name, value }) {
  return {
    type: "changeLoginField",
    payload: { name, value },
  };
}
