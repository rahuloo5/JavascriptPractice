var removeNthFromEnd = function(head, n) {

    let slow= head;
    let fast = head;

    for(let i =1; i<=n;i++){
        fast = fast?.next
    }

    if(fast == null){
        return head.next
    }
    
    while(fast&& fast.next){
            slow = slow.next
        fast= fast.next;
    
    }

  slow.next = slow.next.next;
  return head
};
