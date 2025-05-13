var removeElements = function(head, val) {
    let curr = head;
    let prev = null;

    while(curr!==null){
        if(curr!==null && curr.val==val){
            while(curr!==null&& curr.val==val){
                curr= curr.next
            }
            if(prev!==null){
                prev.next = curr
            }else{
              head = curr
            }
           
        }else{
             prev = curr
            curr= curr.next
        }
    }
    return head
};
