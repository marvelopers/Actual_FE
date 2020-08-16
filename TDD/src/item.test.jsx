const { render } = require("react-dom");

test("Item", () => {
  const task = {
    id: 1,
    title: '매일매일 코딩하기'
  };

  render(
    <Item task={task} />
  );

})