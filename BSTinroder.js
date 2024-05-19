// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


var inorderTraversal = function(root) {
    let result =[];

    function transverse(node){
        if(!node){
            return
        }
        transverse(node.left)
        result.push(node.val)
        transverse(node.right)
    }
    transverse(root)
    return result;
};