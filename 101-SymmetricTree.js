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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return recurse(root.left, root.right)
};

var recurse = function(p, q) {
    if (!p || !q) { // IF ANY OF THE INPUTS IS UNDEFINED, RETURN IF BOTH ARE UNDEFINED
        return p === q;
    }

    if (p.val === q.val) { // IF BOTH VALUES ARE SAME, THEN RECURSE WITH LEFT AND RIGHT NODES SEPARATELY
        return recurse(p.left, q.right) && recurse(p.right, q.left);
    }

    return false; // IF BOTH VALUES ARE NOT SAME, FUNCTION RETURNS FALSE
}