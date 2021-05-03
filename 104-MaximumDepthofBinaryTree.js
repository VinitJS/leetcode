/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

 var maxDepth = function(root) {
    if(!root) return 0;
    function goDeep(node, num) {
        if(node.left) goDeep(node.left, num+1)
        if(node.right) goDeep(node.right, num+1)
        if (num > depth) depth = num
    }
    let depth = 0;
    goDeep(root, 1)
    return depth
};


// SECOND METHOD
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};