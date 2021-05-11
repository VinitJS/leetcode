// node 020-ValidParentheses.js
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let arr = ""
    for(let i=0; i<s.length; i++) {
        if (s[i]==="{") arr = "}" + arr;
        else if (s[i]==="[") arr = "]" + arr;
        else if (s[i]==="(") arr = ")" + arr;
        else {
            if (arr[0] === s[i]) {
                arr = arr.substr(1);
            } else {
                return false;
            }
        }
    }
    return arr.length === 0 ? true : false;
};

console.log(isValid("("));