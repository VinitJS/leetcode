// node 012-IntegertoRoman.js
/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let result = "";
    const map = [[1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]];
    let repeat;
    for(let i=map.length-1; i>-1; i--) {
        repeat = Math.floor(num/map[i][0]);
        if(repeat > 0) {
            for(let j=0; j<repeat; j++) {
                result = result + map[i][1];
            }
        }
        num = num%map[i][0];
    }
    return result;
};
console.log(intToRoman(3));