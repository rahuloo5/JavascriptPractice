var deleteDuplicates = function(head) {
    let curr = head;
    let prev = null;

    while(curr!=null){
        if(curr.next !==null&& curr.val == curr.next.val){
            let val =curr.val;
            while(curr!==null && curr.val ==val){
                curr= curr.next
            }
            if(prev!==null){
                prev.next = curr
            }else{
                head= curr
            }
        }else{
            prev = curr;
            curr= curr.next
        }
    }
    return head
};
