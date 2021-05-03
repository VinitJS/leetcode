/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let letters = new Map()
    let highestLength = 0
    let length = 0
    // loop thru s until you find a repeating character and then slide and move to the letter of the repeating charcter
    for(i = 0; i < s.length; i++) {
        // this checks if a letter is no longer need for e.i abba when you go to b a is no longer used so you increase the length since it doesn't exist anymore
        if(letters.get(s[i]) !== undefined && letters.get(s[i]) >= i - length) {
            length = i - letters.get(s[i])
        } else {
            length++
        }
        letters.set(s[i], i)
        highestLength = Math.max(highestLength, length)
    }
    
    return highestLength
};