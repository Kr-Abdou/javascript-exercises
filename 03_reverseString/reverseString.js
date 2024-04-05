const reverseString = function(string) {
    let word = string.split("");
    word = word.reverse();
    word = word.join("");
    return word
};

// Do not edit below this line
module.exports = reverseString;
