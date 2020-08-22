import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import RegionsContainer from "./RegionsContainer";
import { useSelector, useDispatch } from "react-redux";
jest.mock("react-redux");

test("RegionsContainer", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      regions: [{ id: 1, name: "서울" }],
    })
  );
  const { container, getByText } = render(<RegionsContainer />);

  expect(container).toHaveTextContent("서울");
  fireEvent.click(getByText("서울"));
  expect(dispatch).toBeCalled();
});
