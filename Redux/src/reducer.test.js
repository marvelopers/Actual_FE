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
});
