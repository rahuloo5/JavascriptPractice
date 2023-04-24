class LinkedList {
    constructor(data){
        this.head={
            value:data,
            next:null
        },
        this.tail=this.head;
        this.length =1;
    }

    append(data){
        let newNode = {
            value:data,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }
}

let myList = new LinkedList(20);
console.log(myList,"myList");
myList.append(15);
console.log(myList,"append my list")