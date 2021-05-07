// node 011-ContainerWithMostWater.js
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let area = 0;
    let diff = 0;
    let result = 0;
    let left = 0;
    let right = height.length-1;
    while(right > left) {
        min = Math.min(height[left], height[right]);
        diff = right-left;
        area = min * diff;
        
        if(area > result) result = area;
        
        if(height[left] < height[right]) left++;
        else right--;
    }
    return result;
};
console.log(maxArea([2,3,4,5,18,17,6]));