var levelOrder = function(root) {
    var result = [];
    var level = 0;
    traverse(root, level);
    return result;

    function traverse(root, level) {
        if (root === null) {
            return;
        }
        else {
            if (level >= result.length) {
                 result[level] = [];
            }

            result[level].push(root.val);
            traverse(root.left, level + 1);
            traverse(root.right, level + 1);
        }
    }};
