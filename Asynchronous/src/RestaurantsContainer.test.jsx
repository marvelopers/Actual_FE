import React from "react";
import { render } from "@testing-library/react";
import RestaurantsContainer from "./RestaurantsContainer";
import { useSelector, useDispatch } from "react-redux";
jest.mock("react-redux");

test("RestaurantsContainer", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [{ id: 1, name: "도쿄등심" }],
    })
  );
  const { container, getByText } = render(<RestaurantsContainer />);

  expect(container).toHaveTextContent("도쿄등심");
});
