import reducer from "./reducer";
import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
} from "./action";

describe("reducer", () => {
  describe("setRegions", () => {
    it("changes regions", () => {
      const initialState = {
        regions: [],
      };
      const regions = [{ id: 1, name: "서울" }];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe("setCategories", () => {
    it("changes categories", () => {
      const initialState = {
        categories: [],
      };
      const categories = [{ id: 1, name: "한식" }];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe("setRestaurants", () => {
    it("changes restaurants", () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [{ id: 1, name: "도쿄등심" }];
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe("selectRegion", () => {
    it("changes selectRegion", () => {
      const initialState = {
        regions: [{ id: 1, name: "서울" }],
        selectedRegion: null,
      };
      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: "서울",
      });
    });
  });

  describe("selectCategory", () => {
    it("changes selectCategory", () => {
      const initialState = {
        categories: [{ id: 1, name: "한식" }],
        selectedCategory: null,
      };
      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: "한식",
      });
    });
  });
});
