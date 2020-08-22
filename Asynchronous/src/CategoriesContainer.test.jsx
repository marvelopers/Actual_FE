import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import CategoriesContainer from "./CategoriesContainer";
import categories from "../fixtures/categories";
jest.mock("react-redux");

test("CategoriesContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      categories: [{ id: 1, name: "한식" }],
    })
  );
  const { getByText } = render(<CategoriesContainer />);

  expect(getByText(/한식/)).not.toBeNull();
});
