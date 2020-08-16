test('simple', () => {
  //A(actual)가 B(expect)여야한다. 
  expect(simple(1 + 1)).toBe(2)
});

test('add', () => {
  expect(add(1, 3)), toBe(4);
});