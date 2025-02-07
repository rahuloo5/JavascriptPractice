var isValidBST = function(root) {

    function check(node,low,high){
        if(!node){
            return true
        }

        return low<node.val && high>node.val && check(node.left,low,node.val) && check(node.right,node.val,high)
    }
return check(root,-Infinity,Infinity)
    
};
