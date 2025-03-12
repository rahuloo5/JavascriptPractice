let list = [1,2,3].push(5);
console.log(list,"list") //4
console.log(list.push(6))  // Error: push is not function

//there is error cos push return value is length 


function getNames(names,...leftNames){
    console.log([names,leftNames])
    console.log([...names,...leftNames])
    console.log([...names,leftNames])
    console.log([names,...leftNames])
}

getNames(["rahul","anjali"],"manthan","tantan")

// [ [ 'rahul', 'anjali' ], [ 'manthan', 'tantan' ] ]
// [ 'rahul', 'anjali', 'manthan', 'tantan' ]
// [ 'rahul', 'anjali', [ 'manthan', 'tantan' ] ]
// [ [ 'rahul', 'anjali' ], 'manthan', 'tantan' ]


function compare(a,b){
    if(a>b){
        console.log("a is greater")
    } else{
        console.log("b is greater")
    }
    
    return 
    a+b
}

console.log(compare(2,3))
console.log(compare(3,2))


//no statement read after return

// b is greater
// undefined
// a is greater
// undefined



let name="Rahul";

function getName(){
    console.log(name);
    let name ="Manthan"
}

getName()

// console.log(name);
// ReferenceError: Cannot access 'name' before initialization
//     at getName (/mnt/sol.js:4:17)
const a = false || {} || null
const b = []||""||undefined
const c = {} || null || " "
const d = " "|| {} || null

console.log(a,b,c,d)

//{} [] {}  

console.log(`${(x=>x)("I love")} Manthan`)



const userInfo={
    email:"abc@gmail.com",
    changeEmail:(email)=>{
        this.email=email
    },
}

userInfo.changeEmail("xyz@gmail.com");
console.log(userInfo.email,"email") //abc@gmail.com


const userInfoNormal={
    email:"lmn@gmail.com",
    chnageEmail:function(email){
        this.email=email
    }
}

userInfoNormal.chnageEmail("xyz@gmail.com");
console.log(userInfoNormal.email,"email")//xyz@gmail.com



let count =0;
const nums =[0,1,2,3,4,5]

nums.forEach((num)=>{
    if(num){
        count++
    }
})

console.log(count,"count")//5 cos 0 is false value


const obj ={
    name:"manthan",
    address:{
        city:"gurgaon"
    }
}

Object.freeze(obj);
obj.name = null;
obj.address.city = null;

console.log(obj,"object") 
 // { name: 'manthan', address: { city: null } } object -> nested object not affected by freeze function


const obj ={
    name:"manthan",
}

Object.seal(obj)

obj.name="Rahul";
obj.city="gwalior"
delete obj.name

console.log(obj,"object-seal")

// { name: 'Rahul' } object-seal  only modification allowed not delete and new entry






