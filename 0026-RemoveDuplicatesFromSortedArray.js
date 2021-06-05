// node 0026-RemoveDuplicatesFromSortedArray.js
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums;
    let i = 0;
    let j = 1;
    while(j < nums.length) {
        if(nums[j] === nums[j-1]) {
            j++;
        } else {
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    return nums.slice(0,++i);
};

console.log(removeDuplicates([0,1,1,2,3,3,4,4,5]))