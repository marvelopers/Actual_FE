import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";
import { useDispatch, useSelector } from "react-redux";
jest.mock("react-redux");

describe("App", () => {
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );
  }
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [],
        categories: [],
        restaurants: [],
      })
    );
  });

  context("with Path /", () => {
    it("renders the home Page", () => {
      // const { container } = renderApp("/");
      const { container, getByText } = renderApp({ path: "/" });

      expect(getByText("HOME")).not.toBeNull();
    });
  });
});
