// node 017-LetterCombinationsofaPhoneNumber.js
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    
    const result = [];
    
    if(digits.length < 1) return result;
    
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };
    
    const recurse = (idx, str) => {
        if(idx === digits.length) {
            return result.push(str);
        }
        
        for(let i=0; i<map[digits[idx]].length; i++) {
            recurse(idx+1, str+map[digits[idx]][i]);
        }
    }
    
    recurse(0, "");
    return result;
};

console.log(letterCombinations("23"))