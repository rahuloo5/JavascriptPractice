function threeseconds(){
    setTimeout(()=>{
        console.log("rahul")
    },3000)
}

//threeseconds();
// Q. Create a function which receives a function as argument and executes it after 2 seconds

function twosecond(callback){
    if(typeof callback =="function"){
    setTimeout(callback,2000)
    }
}

function displayname(){
    console.log("my name is rahul")
}

//twosecond(displayname)


// Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed

function onetoten(){
    for(let i =0; i<10;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}
//onetoten();


// Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

function timeintervalcount(){
    let i =0;
    let intervalid = setInterval(()=>{
        console.log(i);
        i++;
        if(i>9){
            clearInterval(intervalid)
        }
    },1000)
}
//timeintervalcount()

//Timer

function Timer(intial,step){

    let count =intial;
    let intervalid;

    function startTimer(){
        if(!intervalid){
            intervalid=  setInterval(()=>{
                console.log(count);
                count=count+step;
            },1000)
        }
    }

    function stopTimer(){
        clearInterval(intervalid);
        intervalid = null;
    }

    return {
        startTimer,stopTimer
    }
}

// let newTime = Timer(5,15);
// newTime.startTimer();
//newTime.stopTimer()

// setTimeout(()=>{
//     newTime.stopTimer()
// },2000)

function asyncFunc1(callback) {
    console.log('Started asyncFunc1');
    setTimeout(() => {
        console.log('Completed asyncFunc1');
        callback();
    }, 3000);
}

function asyncFunc2(callback) {
    console.log('Started asyncFunc2');
    setTimeout(() => {
        console.log('Completed asyncFunc2');
        callback();
    }, 2000);
}

function asyncFunc3(callback) {
    console.log('Started asyncFunc3');
    setTimeout(() => {
        console.log('Completed asyncFunc3');
        callback();
    }, 1000);
}

function callbackManager(asyncFuncs) {
    function nextFuncExecutor() {
        console.log(asyncFuncs,"asyncfunctions")
        const nextAsyncFunc = asyncFuncs.shift();
        console.log(nextAsyncFunc,"next")
        if (nextAsyncFunc && typeof nextAsyncFunc === 'function') {
            nextAsyncFunc(nextFuncExecutor, asyncFuncs);
        }
    }
    nextFuncExecutor();
}

// driver code
// callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    })
}).then((result)=>{
    console.log(result,"first promise");
    return result*2
}).then((result,reject)=>{
    console.log(result,"second promise");
    throw Error("failed")
}).catch((err)=>{
    console.log(err)
})

function a(){
  return new Promise((resolve,rejct)=>{
resolve("golu")
  }) 
}
function b(){
    console.log("rahul")
}
function c(){
    console.log("gudiya")
    return new Promise((resolve,reject)=>{
        reject("so sorry")
    })
}
function d(){
    console.log("shiv")
    return((resolve,reject)=>{
        reject("so sorry")
    })
    
}
a().then(b).then(c).then(d).catch((err)=>console.log("jadu"))

// Q. Execute an array of asynchronous functions which returns a promise, one after the other in sequence
// Asynchronous functions can be executed and promises can be captured in an array
// Array method reduce can be used to make the sequential execution on promise settlement


const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());