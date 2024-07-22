const { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher
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
