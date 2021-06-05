// node 001-TwoSum.js
const twoSum = (nums, target) => {
    const map = {}
    
    let i = 0;
    while(i < nums.length) {
        if(map[nums[i]] !== undefined) {
            break;
        }
        map[target-nums[i]] = i;
        i++;
    }
    return [map[nums[i]], i]
};

console.log(twoSum([2,7,11,15], 9));