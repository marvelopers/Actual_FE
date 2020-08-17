import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { useSelector } from "react-redux";

jest.mock("react-redux");

test("App", () => {
  // mock을 사용하지 않을 경우!
  // const { getByText } = render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>

  useSelector.mockImplementation((selector) =>
    selector({
      taskTitle: "",
      tasks: [
        { id: 1, title: "핫도그 데워먹기" },
        { id: 2, title: "핫도그 칼로리만큼 운동하기" },
      ],
    })
  );
  const { getByText } = render(<App />);

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무것도 하지 않기/)).not.toBeNull();
});
