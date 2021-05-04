// node 006-ZigZagConversion.js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(str, numRows) {
    let s=0;
    const matrix = Array(numRows).fill("")
    loop1:
    while(s < str.length) {
        for(let i=0; i<numRows; i++) {
            matrix[i] += str[s]
            s++;
            if(s >= str.length) break loop1;
        }
        for(let j=numRows-2; j>0; j--) {
            matrix[j] += str[s];
            s++;
            if(s >= str.length) break loop1;
        }
    }
    return matrix.join("");
};

console.log(convert("PAYPALISHIRING", 3));