import calculate from '../logic/calculate';

test('20 and +/- must be -20', () => {
  const obj = { total: '', next: 20, operation: '' };
  const result = calculate(obj, '+/-');
  expect(parseFloat(result.next)).toBe(-20);
});

test('obj = {total:33, operation:x, next: 2} and buttonName - must be return total:66 and operation: - ', () => {
  const obj = { total: 33, next: 2, operation: 'x' };
  const result = calculate(obj, '-');
  expect(result).toMatchObject({ next: null, operation: '-', total: '66' });
});
