// node 007-ReverseInteger
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const negative = x<0 ? -1 : 1;
    x = Math.abs(x);
    let y=0;
    while (x > 0) {
        const digit = x%10;
        x = Math.floor(x/10);
        y *=10;
        y +=digit;
    }
    if (y > Math.pow(2,31)) return 0;

    return y * negative;
};

console.log(reverse(-120));