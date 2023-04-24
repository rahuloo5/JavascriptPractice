 class LinkedList {

    constructor(data){
        this.head ={
            value:data,
            next:null
        }
        this.tail = this.head;
        this.length=1;
    }
    append(data){
        let newNode ={
            value :data,
            next:null
        }
        this.tail.next=newNode;
        this.tail = newNode;
        this.length++
    }
    prepend(data){
        let newNode ={
            value:data,
            next:null
        }
        newNode.next= this.head;
        this.head= newNode;
        this.length++
    }
 }

 let myList = new LinkedList(15)
 console.log(myList,"Mylist");
 myList.append(20);
 console.log(myList,"append")
 myList.prepend(5)
 console.log(myList,"prepend")