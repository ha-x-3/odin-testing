function capitalize(str) {
    const word = str;
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitalizedWord;
}

module.exports = { capitalize }