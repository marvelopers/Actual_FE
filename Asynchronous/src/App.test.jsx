import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { useSelector, useDispatch } from "react-redux";
import restaurants from "../fixtures/restaurants";
jest.mock("react-redux");

test("App", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [],
      restaurant: {},
      categories: [],
    })
  );
  const { getByText } = render(<App />);

  expect(dispatch).toBeCalledWith({
    type: "setRestaurants",
    payload: { restaurants },
  });
  // expect(getByText(/도쿄등심/)).not.toBeNull();
});
