// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

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
var zigzagLevelOrder = function(root) {
    const answer = [];
       function helper(node, depth = 0) {
           if (!node) return;
           answer[depth] = (answer[depth] || []);
           console.log(answer,"ans")
           if (depth % 2 === 0) answer[depth].push(node.val);
           else answer[depth].unshift(node.val);
           helper(node.left, depth + 1);
           helper(node.right, depth + 1);
       }
       helper(root)
       return answer
   
   };