const { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
 } = require('./activity');

test('capitalizes first character of given string', () => {
    expect(capitalize('cat')).toBe('Cat');
    expect(capitalize('cAT')).toBe('Cat');
});

test('returns a given string in reverse', () => {
    expect(reverseString('cat')).toBe('tac');
});

test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(12, 10)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides two numbers', () => {
    expect(calculator.divide(12, 3)).toBe(4);
});

test('returns a given string shifted by a given shift factor', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('returns an object that contains the average, min, max, and length of a given array', () => {
    const array = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(array.average).toBe(4);
    expect(array.min).toBe(1);
    expect(array.max).toBe(8);
    expect(array.length).toBe(6);
});
