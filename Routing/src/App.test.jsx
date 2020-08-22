import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { useSelector } from "react-redux";
jest.mock("react-redux");

test("App", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      regions: [],
      categories: [],
      restaurants: [],
    })
  );

  render(<App />);
});
