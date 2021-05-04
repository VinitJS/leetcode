// node 004-MedianofTwoSortedArrays.js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length;
    const isEven = !(len % 2);
    const result = Array(len + isEven);
    let i=0;
    for( i1=0, i2=0;i<result.length/2;i++) {
        if((nums1[i1] ?? Infinity) < (nums2[i2] ?? Infinity)) {
            result[i] = nums1[i1];
            i1++;
        }
        else {
            result[i] = nums2[i2];
            i2++;         
        }
    }
    i--;
    return isEven ? (result[i] + result[i-1])/ 2 : result[i];
};

console.log(findMedianSortedArrays([1,3], [2,4]))