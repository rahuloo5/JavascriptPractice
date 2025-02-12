    mergeKLists(lists) {
        let nodes =[];
        for(let list of lists){
            while(list){
                nodes.push(list.val);
                list = list.next
            }
        }
        nodes.sort((a,b)=>a-b)
        console.log(nodes,"nodes")
        let res = new ListNode(0);
        let curr = res;
        for(let node of nodes){
            curr.next = new ListNode(node)
            curr= curr.next;
        }
        console.log(curr,res,"res")
        return res.next;
    }
