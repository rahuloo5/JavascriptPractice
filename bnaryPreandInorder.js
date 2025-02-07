var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const newParentNode = new TreeNode(preorder[0]);
  const middle = inorder.indexOf(preorder[0]);
  newParentNode.left = buildTree(
    preorder.slice(1, middle + 1),
    inorder.slice(0, middle)
  );
  newParentNode.right = buildTree(
    preorder.slice(middle + 1),
    inorder.slice(middle + 1)
  );
  return newParentNode;
};
