// node 022-GenerateParentheses.js
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    function recurse(s="",open=0,close=0) {
        if(s.length===2*n){
            result.push(s);
            return;
        }
        if(open<n) recurse(s+'(',open+1,close); // KEY LOGIC
        if(close<open) recurse(s+')',open,close+1); // KEY LOGIC
    }
    recurse();
    return result;
};

console.log(generateParenthesis(3));