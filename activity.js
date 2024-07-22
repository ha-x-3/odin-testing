function capitalize(str) {
    const word = str;
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitalizedWord;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function caesarCipher() {

}

module.exports = { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher
 }