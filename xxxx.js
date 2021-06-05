arr = [2,7,1,1,3];
result = [];
let i = 0;
function recurse(arr, i, res) {
    if(i === arr.length-1) {
        res.push(i);
        if(result.length === 0 || result.length > res.length) {
            result = res;
        }
        return;
    }

    if(i > arr.length-1) return;
    
    res.push(i);
    
    for(let j=1; j<arr[i]+1; j++) {
        recurse(arr, i+j, [...res]);
    }
}
recurse(arr, i, []);
console.log(result);