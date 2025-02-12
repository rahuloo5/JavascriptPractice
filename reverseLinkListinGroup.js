 reverseKGroup(head, k) {

        if(head==null){
            return null
        }
        let curr = head, prev = null , next = null;
        let c =k;

         while(curr!==null && c>0){
            next = curr.next;
            curr.next= prev;
            prev = curr;
            curr= next;
            c--
        }


       if(curr == null && c > 0){ // if last group size is not k, reverse again
            curr = prev; prev = null; next = null;
            while(curr != null){
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
        }

if(c>0){
    return prev
}else{
    head.next = this.reverseKGroup(curr,k);

}
   return prev     
    }
