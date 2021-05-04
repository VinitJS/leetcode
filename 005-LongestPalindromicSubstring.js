// node 005-LongestPalindromicSubstring.js

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let start = 0, end = 0;
    let palindrome = s[0];
    for(let i = 1; i < s.length; i++) {
        start = i-1;
        end = i;
        while(s[start] && s[end] && s[start] === s[end]) {
            start--;
            end++;
        }
        if((end)-(start+1) > palindrome.length) palindrome = s.substr(start+1, (end)-(start+1));
        
        start = i-1;
        end = i+1;
        while(s[start] && s[end] && s[start] === s[end]) {
            start--;
            end++;
        }
        if((end)-(start+1) > palindrome.length) palindrome = s.substr(start+1, (end)-(start+1))
    }
    
    return palindrome;
};

console.log(longestPalindrome("ccc"))