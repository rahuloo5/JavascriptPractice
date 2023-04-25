class Stack {
    constructor(elements){
        this.arr = elements
    }

    push(ele){
        return this.arr.push(ele)
    }

    pop (){
        return this.arr.pop()
    }
    isEmpty(){
        return !this.arr.length>0
    }

    lastElement(){
        return this.arr[this.arr.length-1]
    }
};


const newStack = new Stack([1,2,3,4,5]);
console.log(newStack,"newStack")
console.log(newStack.push(15),"push")
console.log(newStack.pop(),"pop")
console.log(newStack.isEmpty(),"isEmpty")
console.log(newStack.lastElement(),"last element")


// now i want to make it private

let items = new WeakMap();
 class StackPrivate  {
    constructor(data){
        items.set(this,data)
    }

    push(ele){
        let item = items.get(this)
        return item.push(ele)
    }

    pop (){
        let item = items.get(this)
        return item.pop()
    }
    isEmpty(){
        return !items.length>0
    }

    lastElement(){
        return this.arr[this.arr.length-1]
    }

}

let stacky = stack; 
const newStackPrivate = new stacky([6,7,8,9,10]);
console.log(newStackPrivate,"newStack")
console.log(newStackPrivate.push(15),"push")
console.log(newStackPrivate.pop(),"pop")