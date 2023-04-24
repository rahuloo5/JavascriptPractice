// 10->20->16


let linkedList ={
    value:10,
    next:{
        value:20,
        next:{
            value:16,
            next:null
        }
    }
}

//contruct linkedlist using class

class LinkedList {

    constructor(data){
        this.head ={
            vlaue:data,
            next: null
        }
        this.tail = this.head;
    }
    

}

let myList = new LinkedList(5);
console.log(myList,"mylist")