var getDecimalValue = function(head) {
    let res =0
    while(head!==null){
        res = res*2+head.val;
        head = head.next;
    }
    return res
};
