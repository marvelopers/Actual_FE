import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import RestaurantContainer from "./RestaurantContainer";
import restaurants from "../fixtures/restaurants";
jest.mock("react-redux");

test("RestaurantContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      restaurants,
    })
  );
  const { getByText } = render(<RestaurantContainer />);

  expect(getByText(/도쿄등심/)).not.toBeNull();
});
