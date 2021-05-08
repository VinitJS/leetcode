// node 013-RomantoInteger.js
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = 0;
    for(let i=s.length-1; i>-1; i--) {
        if(map[s[i-1] + s[i]]) {
            result += map[s[i-1] + s[i]];
            i--;
        } else {
            result += map[s[i]]
        }
    }
    return result;
};


// SHORTER SOLUTION
symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt2 = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        // if next letter in string has greater value than current then subtract the value of current symbol, else add
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};

console.log(romanToInt("III"));
console.log(romanToInt2("III"));