function async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("rahul")
        },3000)
    })
}

function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("anjali")
        },2000)
    })
}

function async3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("golu")
        },1000)
    })
}

const promises = [async1,async2,async3];
const resultOfPromises = promises.map((res)=>res());
Promise.race(resultOfPromises).then((response)=>console.log(response)).catch((err)=>console.log(err,"error"))