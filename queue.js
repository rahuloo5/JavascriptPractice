const items = new WeakMap();

class Queue {
    constructor(data){
        items.set(this,data)
    }

    Enqueue(value){
        const item = items.get(this);
        return item.push(value)

    }

    Dequeue(){
        const item = items.get(this);
        return item.shift()
    }

    isEmpty(){

        const item = items.get(this);
        return !item.length>0
    }
    Print(){
        return console.log(items.get(this))
    }
}


const queueData = new Queue([1,2,3,4,5]);

console.log(queueData,"queueData");
console.log(queueData.Enqueue(15),"enqueue")
console.log(queueData.Dequeue(),"dequeue")
console.log(queueData.isEmpty(),"isEmpty")
console.log(queueData.Print(),"print")