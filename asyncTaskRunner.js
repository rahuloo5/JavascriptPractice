function delay(time){
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
    
}

async function task1(){
    console.log("task 1 started")
   await delay(1000)
    console.log("task 1 done")
}

async function task2(){
    console.log("task 2 started")
   await delay(5000)
    console.log("task 2 done")
}

async function task3(){
    console.log("task 3 started")
     await delay(1500)
      console.log("task 3 done")
}

async function task4(){
    console.log("task 4 strated")
   await delay(500)
   console.log("task 4 done")
}

async function task5(){
    console.log("task 5")
  await delay(0)
}

class TaskRunner{
    constructor(limit){
        this.queue=[];
        this.running=0;
        this.limit=limit
        
    }
    
    async push(task){
        if(this.running<this.limit){
           await this.execute(task)
        }else{
            this.queue.push(task)
        }
    }
    
    async execute(task){
        this.running=this.running+1;
        try{
               await task()
        }finally{
            this.running--
            if(this.queue.length && (this.running<this.limit)){
                await this.execute(this.queue.shift())
            }
        }
     
    }
}

let asyncRunner = new TaskRunner(3);
asyncRunner.push(task1)
asyncRunner.push(task2)
asyncRunner.push(task3)
asyncRunner.push(task4)
asyncRunner.push(task5)
