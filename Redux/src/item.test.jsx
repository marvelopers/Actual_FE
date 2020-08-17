import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // jest config 생성
import Item from "./Item";

test("Item", () => {
  const task = {
    id: 1,
    title: "매일매일 코딩하기",
  };

  const handleClick = jest.fn();

  // function handleClick() {
  //   //
  // }

  const { container, getByText } = render(
    <Item task={task} onClickDelete={handleClick} />
  );

  expect(container).toHaveTextContent("매일매일 코딩하기");
  // expect(container).toHaveTextContent("완료!");

  const button = getByText("완료");
  fireEvent.click(button);

  expect(handleClick).toBeCalled();
  expect(handleClick).toBeCalledWith(1);
});
