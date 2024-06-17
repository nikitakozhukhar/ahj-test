import {isValid} from '../validators';

test('should be false if inn less than 10', () => {
  const result = isValid('adgba');

  expect(result).toBe(false)
});

test('should be false if inn more than 12', () => {
  const result = isValid('1234567891232');

  expect(result).toBe(false)
})