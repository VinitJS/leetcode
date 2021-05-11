// node 020-ValidParentheses.js
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let arr = [];
    for(let i=0; i<s.length; i++) {
        switch (s.charAt(i)) {
            case "{": {
                arr.push("}");
                break;
            }
            case "[": {
                arr.push("]");
                break;
            }
            case "(": {
                arr.push(")");
                break;
            }
            default: if(s[i] !== arr.pop()) return false;
        }
    }
    return arr.length === 0;
};

console.log(isValid("[()]"));