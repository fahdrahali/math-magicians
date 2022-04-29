import operate from '../logic/operate';

test('adds 1 + 2 to equal 3', () => {
  const result = parseFloat(operate(1, 2, '+'));
  expect(result).toBe(3);
});

test('adds 2 x 2 to equal 4', () => {
  const result = parseFloat(operate(2, 2, 'x'));
  expect(result).toBe(4);
});
