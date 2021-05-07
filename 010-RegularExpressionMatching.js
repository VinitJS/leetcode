// node 010-RegularExpressionMatching.js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (string, pattern) => {

    // if end of pattern, return true if string does not exist too
    if (!pattern) return !string;
    
    // if string exists and first character of string is same as first character in pattern
	const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);
    
    // if next character is *, then try recursing by considering * to be 0 and considering * to be greater tha 0
    if (pattern[1] === '*') return (isMatch(string, pattern.slice(2)) || (hasFirstCharMatch && isMatch(string.slice(1), pattern)));
    
    // if first characters match then recurse with rest else return false 
    return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

console.log(isMatch("aaa", ".*b*a*c*aa"));