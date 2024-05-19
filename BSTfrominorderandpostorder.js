// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = new Map();
   
   for(let i = 0; i < inorder.length; i++) {
       map.set(inorder[i], i);
   }
   
   function callDFS(start, end) {
       console.log(start,"start")
       console.log(end,"End")
       if(start > end) return null;
       const val = postorder.pop();
       console.log(val,"val");
       const idx = map.get(val);
       console.log(idx,"idx")
       const node = new TreeNode(val);
       console.log(node,"node")
       node.right = callDFS(idx+1, end);
       console.log("right done")
       node.left = callDFS(start, idx-1);
       return node;
   }
   
   return callDFS(0, inorder.length-1);
   
};

// var buildTree = function(inorder, postorder) {
   
//     function callDFS(arr) {
//         if(!arr.length) return null;
//         const val = postorder.pop();
//         const idx = arr.indexOf(val);
//         const node = new TreeNode(val);
//         node.right = callDFS(arr.slice(idx+1));
//         node.left = callDFS(arr.slice(0, idx));
//         return node;
//     }
   
//     return callDFS(inorder);
// };