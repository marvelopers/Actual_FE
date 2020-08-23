import React from "react";
import { render } from "@testing-library/react";
import RestaurantsPage from "./RestaurantsPage";
import { useSelector, useDispatch } from "react-redux";
import restaurants from "../fixtures/restaurants";
jest.mock("react-redux");

test("RestaurantsPage", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      regions: [{ id: 1, name: "서울" }],
      categories: [{ id: 1, name: "한식" }],
      restaurants: [{ id: 1, name: "도쿄등심" }],
    })
  );

  const { getByText } = render(<RestaurantsPage />);

  expect(dispatch).toBeCalled();

  expect(getByText("서울")).not.toBeNull();
  expect(getByText("한식")).not.toBeNull();
  //queryByText 로 되어 있었어요
});
