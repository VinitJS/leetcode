// node 009-PalindromeNumber.js

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0) return false;
    
    let i = x, reverse = 0;
    while(i>0) {
        reverse = (reverse * 10) + i%10;
        i = Math.floor(i/10);
    }
    
    return x===reverse;
};

console.log(isPalindrome(202))
console.log(isPalindrome(-202))
console.log(isPalindrome(20))
console.log(isPalindrome(0))
console.log(isPalindrome(11))