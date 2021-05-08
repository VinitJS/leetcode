// node 014-LongestCommonPrefix.js
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let j=0;
    for(let i=0; i<strs.length; i++) {
        if(strs[i] === "") return "";
        if(strs[0] === strs[i]) j++;
    };
    if(j === strs.length) return strs[0];

    let common=true;
    j = -1;
    while(common && j<strs[0].length) {
        j++;
        for(let i=1; i<strs.length; i++) {
            if(strs[0][j] !== strs[i][j]) {
                common = false;
                break;
            }
        }
    }
    return strs[0].substr(0, j-0);
};

// SHORTER SOLUTION
var longestCommonPrefix2 = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(["flower", "flower", "flower"]))
console.log(longestCommonPrefix2(["flower", "flower", "flower"]))