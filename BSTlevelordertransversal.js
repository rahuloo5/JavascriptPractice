// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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

// Input: root = [3,9,20,null,null,15,7]

var levelOrder = function(root) {
    if(!root){
        return []
    }
    let queue = [root];
let result = [];

while(queue.length){
    let size = queue.length;
    let level =[]
    for(let i =0; i<size;i++){
        let node = queue.shift();
        
        if(node.left){
            queue.push(node.left)
        }
         if(node.right){
            queue.push(node.right)
        }
        level.push(node.val)
    }
    result.push(level)
}
 return result   
};