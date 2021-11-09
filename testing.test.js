const { stringLength,sum, reverseString, capitalize, Calculator} = require('./testing');

test('should return string length', () => {
  expect(stringLength('phone')).toBe(5);
});

test('throws on octopus', () => {
  expect(() => {
    stringLength('octopusssss');
  }).toThrow("string should be more than 1 or less than 10");
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('reverse a string', ()=> {
  expect(reverseString('hello')).toBe('olleh')
});

test(' first letter capitalize in a word', ()=> {
  expect(capitalize('hello')).toBe('Hello')
});

describe('Calculator add function', () => {
  test('adds two numbers', ()=> {
    expect(Calculator.add(1,1)). toBe(2);
  })
})