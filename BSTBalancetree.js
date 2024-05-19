// Given a binary tree, determine if it is 
// height-balanced

// Input: root = [3,9,20,null,null,15,7]
// Output: true

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
var isBalanced = function(root) {


    function dfsheight(node){

        if(!node){
            return 0
        }
       
            let lh = dfsheight(node.left)
        if(lh==-1){
            return -1
        }
            let rh = dfsheight(node.right)
        if(rh==-1){
            return -1
        }

        if(Math.abs(lh-rh)>1){
            return -1
        }

        return 1+Math.max(lh,rh)
    }

    return dfsheight(root) !== -1
};