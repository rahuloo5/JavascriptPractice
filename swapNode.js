var swapPairs = function(head) {

    if(head == null || head.next == null){
        return head
    }

    let a =  swapPairs(head.next.next);
    head.next.next = head;
    let newHead = head.next;
    head.next=a

    return newHead
    
};
