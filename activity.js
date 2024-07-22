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

function caesarCipher(message, shift) {
  let result = '';
  
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    
    if (char.match(/[a-z]/i)) {
      const code = message.charCodeAt(i);
      
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    
    result += char;
  }
  
  return result;
}

function analyzeArray(arr) {
    let average = arr.reduce((a, b) => a + b, 0) / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    return { average, min, max, length };
}

module.exports = { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
 }