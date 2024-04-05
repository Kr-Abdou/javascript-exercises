const palindromes = function (word) {
    var regx = /[^A-Za-z0-9]/g;
    var lowStr = word.toLowerCase().replace(regx,'');
    var rev = lowStr.split('').reverse().join('');
    return lowStr === rev;
};

// Do not edit below this line
module.exports = palindromes;
