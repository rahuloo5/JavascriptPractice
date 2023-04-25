class PriorityQueue{
    constructor(data){
        if(data){
            this.items = data
        }
        this.items = []
    }

    Enqueue(value,prio){
let QueueElement={
    item:value,
    prior:prio,
    }
    let added = false;

    for(let i =0 ; i<this.items.length;i++){
        if(QueueElement.prior<this.items[i].prior){
            this.items.splice(i,0,QueueElement);
            added=true;
            break;
        }
    }

    if(!added){
        this.items.push(QueueElement)
    }

}

Print(){
   return console.log(this.items,"items")
}
}

const queue = new PriorityQueue();
console.log(queue.Enqueue("rahul",1),"fist")
console.log(queue.Enqueue("anjali",2),"second")
console.log(queue.Enqueue("vikas",1),"third")
console.log(queue.Print())