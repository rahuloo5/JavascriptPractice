 class Queue {
    constructor(data){
        this.items = data;
    }

    Enqueue(val){
        return this.items.push(val)
    }

    Dequeue(val){
        return this.items.shift()
    }

    isEmpty(){

        return !this.items.length>0
    }
    Size(){
        return this.items.length;
    }

    Print(){
        return this.items;
    }
 }


 const hotPotato =()=>{

    let names = ["rahul","anjali","rahan","vikas"]
    let num = 2;

    let queue = new Queue(names);
    let eliminated =""

    while(queue.Size()>1){
        for(let i =0 ;i<num;i++){
            queue.Enqueue(queue.Dequeue())
        }
        eliminated = queue.Dequeue()
    }
let winner=  queue.Dequeue()
console.log(winner,"wineer")

 }

 const Winner = hotPotato()
 console.log(Winner,"winner")