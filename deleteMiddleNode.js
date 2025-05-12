var deleteMiddle = function(head) {
    
    if(head==null ||  head.next == null){
        return null
    }
let slow = head;
let fast = head;
let curr = head;
while(fast!==null && fast.next !== null){
    curr = slow;
    slow = slow.next;
    fast = fast.next.next;
}
curr.next = slow.next;
return head
};
