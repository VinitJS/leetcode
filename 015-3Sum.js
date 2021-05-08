// node 015-3Sum.js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// WORKS GREAT FOR LARGE INPUTS BUT BAD FOR SMALL INPUTS
var threeSum2 = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
                
				rtn.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};

// WORKS GREAT FOR SMALL INPUTS BUT BAD FOR LARGE INPUTS
 var threeSum = function(nums) {
    const result = [];
    if (nums.length < 3) return result;
    nums.sort((a,b) => a-b);
    let total;
    for(let i=0; i<nums.length-2; i++) {
        if(nums[i] > 0) return result;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j=i+1; j<nums.length-1; j++) {
            if (nums[j] === nums[j - 1] && i!==j-1) continue;
            if(nums[i] + nums[j] > 0) break;
            for(let k=j+1; k<nums.length; k++) {
                if (nums[k] === nums[k - 1] && j!==k-1) continue;
                total = nums[i] + nums[j] + nums[k];
                if(total === 0) result.push([nums[i], nums[j], nums[k]]);
                if(total > 0) break;
            }
        }
    }
    return result;
};

console.time("one")
console.log(threeSum([
    -11, -14, -29, -29, -3, -3, -43, -49, -6, -66, -70,
    -82,   1,  10,  12, 13, 15,  15,  17,  2,  21,  26,
     26,  28,  28,  29, 31, 33,  34,  36, 43,  46,  46,
     47,  48,  49,  52, 55, 55,  56,  57, 61,  62,  65,
     69,  71,  74,  76, 77, 79,  83,  84, 86,  93,  94
]));
console.timeEnd("one")
console.time("two")
console.log(threeSum2([
    -11, -14, -29, -29, -3, -3, -43, -49, -6, -66, -70,
    -82,   1,  10,  12, 13, 15,  15,  17,  2,  21,  26,
     26,  28,  28,  29, 31, 33,  34,  36, 43,  46,  46,
     47,  48,  49,  52, 55, 55,  56,  57, 61,  62,  65,
     69,  71,  74,  76, 77, 79,  83,  84, 86,  93,  94
]));
console.timeEnd("two")