const fizzBuzz = require('../fizzbuz');

describe('fizzBuzz', () => {
test('Should return fizz if the number is divisible by three', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
})
test('Should return Buzz if the number is divisible by five', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
})
test('Should return FizzBuzz if the number is divisible by fifteen', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
})
})