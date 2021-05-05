// node 008-StringtoInteger.js

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    
    let isNegative = 1;
    let result = 0;
    let i=0;
    
    while(i<s.length) {
        
        if(s[i] === " ") {
            i++;
            continue;
        }
        break;
    }

    if(s[i] === "-") {
        i++;
        isNegative = -1;
    } else if(s[i] === "+") {
        i++;
    }
    
    for(; i<s.length; i++) {
        if(s[i].charCodeAt(0) < 48 || s[i].charCodeAt(0) > 57) break;
        result *= 10;
        result += s[i].charCodeAt(0) - 48;
    }

    result *= isNegative;
    return (result > 2147483647) ? 2147483647 : (result < -2147483648) ? -2147483648 : result;
};

console.log(myAtoi("+1"));