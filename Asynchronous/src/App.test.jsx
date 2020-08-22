import React from "react";
import { render, queryByText } from "@testing-library/react";
import App from "./App";
import { useSelector, useDispatch } from "react-redux";
import restaurants from "../fixtures/restaurants";
jest.mock("react-redux");

test("App", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      regions: [{ id: 1, name: "서울" }],
      categories: [{ id: 1, name: "한식" }],
      restaurants: [{ id: 1, name: "도쿄등심" }],
    })
  );

  const { getByText } = render(<App />);

  expect(dispatch).toBeCalled();

  expect(getByText("서울")).not.toBeNull();
  expect(queryByText("한식")).not.toBeNull();
});
