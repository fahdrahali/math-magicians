import operate from '../logic/operate';

test('adds 1 + 2 to equal 3', () => {
  const result = parseFloat(operate(1, 2, '+'));
  expect(result).toBe(3);
});

test('adds 2 x 2 to equal 4', () => {
  const result = parseFloat(operate(2, 2, 'x'));
  expect(result).toBe(4);
});

test('adds 6 - 2 to equal 4', () => {
  const result = parseFloat(operate(6, 2, '-'));
  expect(result).toBe(4);
});

test('adds 12 ÷ 6 to equal 2', () => {
  const result = parseFloat(operate(12, 6, '÷'));
  expect(result).toBe(2);
});
