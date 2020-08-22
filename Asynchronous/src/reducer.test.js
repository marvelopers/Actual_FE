import reducer from "./reducer";
import { setRestaurants } from "./actions";

describe("reducer", () => {
  describe("setRestaurants", () => {
    it("changes restaurants array", () => {
      const initialState = {
        restaurants: [],
      };
      reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe("setCategories", () => {
    it("changes categories", () => {
      const categories = [{ id: 1, name: "한식" }];
      const initialState = {
        categories: [],
      };
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
