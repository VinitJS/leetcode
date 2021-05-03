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
 * @return {number[][]}
 */
function levelOrder(root) { 
    // EDGE CASES
    if (!root) return [];
    
    // STORAGE
	const levelArray = [];
    
    // RECURSIVE FUNCTION
    const addToLevels = function(node, level) {
        if (levelArray[level] === undefined) levelArray[level] = [];
        levelArray[level].push(node.val); // add itself, then check children
        if (node.left) addToLevels(node.left, level + 1); 
        if (node.right) addToLevels(node.right, level + 1);
    }
    
	addToLevels(root, 0);
	
    return levelArray;
}