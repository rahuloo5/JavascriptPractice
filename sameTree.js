
 
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let tree1 = new TreeNode(10,5,15);
let tree2 = new TreeNode(10,4,15);

/**
* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/
var isSameTree = function(p, q) {
    // Handle null root case
    if(!p && !q) return true;
    
	// If one is null, trees are different
    if(!p || !q) return false;
	
	// Compare value at this level
    if(p.val !== q.val) return false;
    
	// Check left first, then right
    if(!isSameTree(p.left, q.left)) return false;
    if(!isSameTree(p.right, q.right)) return false;
    
	// If all checks pass, trees are equal
    return true;
    
};