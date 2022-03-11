/* // sum.js
const sum = (a, b) => a + b;

module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
}); */
const sum = require('./script')

describe('primeiro exercicio', () => {
  it('a soma 4, 5 deve retornar 9', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0)
  });
  it('dispara um erro caso receba um parametro igual uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})