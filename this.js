this.name ="rahul"
console.log(this,"window this")

const obj1={name:"gwalior"}
const ob2 ={name:"gurgaon"}

function getPlace(){
    return `i live in ${this.name}`
}
obj1.getPlace = getPlace
ob2.getPlace = getPlace
console.log(obj1.getPlace(),"obj1")
console.log(ob2.getPlace(),"obj2")


const obj3={
    name:"rahul",
    namePerson(){
        console.log(this.name)
    }
}

console.log(obj3.namePerson(),"name");

 this.company = "cognizant"

const arrowFunction=()=>{
    console.log(this.company,"arrow")
}
arrowFunction()


const arrowObj ={
    name:"america",
    country:()=>{
        console.log(this.name,"arrowcountry")
    },
    normalfnc(){
        console.log(this.name,"nrml fnc")
    }
}

arrowObj.country();
arrowObj.normalfnc();

let outerFunc = arrowObj.normalfnc;
console.log(outerFunc(),"function called outside")


const calc={
    total:0,
    add:function(val){
        this.total = this.total+val
        return this
    },
    mul:function(val){
        this.total = this.total*val;
        return this
    },
    sub:function(val){
        this.total= this.total-val;
        return this
    }

}

const result = calc.add(10).mul(2).sub(2)
console.log(result.total,"result totlal")


const msg={
    meesage:"hello world",
    getMessage(){
        let message ="Hello Rahul";
        console.log(this.meesage,"message")
    }
}

console.log(msg.getMessage())

function Pet(name) {
    this.name = name;
  
    this.getName = () => this.name;
  }
  
  const cat = new Pet('Fluffy');
  
  console.log(cat.getName()); // What is logged?
  
  const { getName } = cat;
  console.log(getName());   


  const callBackObj ={
    msg:"helo rahul",
    getMsg(){
        console.log(this.msg,"message callback")
    }
  }

  setTimeout(callBackObj.getMsg,0)
  setTimeout(()=>{callBackObj.getMsg()},0);

  const object = {
    who: 'World',
  
    greet() {
      return `Hello, ${this.who}!`;
    },
  
    farewell: () => {
      return `Goodbye, ${this.who}!`;
    }
  };
  
  console.log(object.greet());    // What is logged?
  console.log(object.farewell()); 



  var length = 4;
function callback() {
  console.log(this.length,"length"); // What is logged?
}

const objectData = {
  length: 5,
  method(callback) {
    arguments[0]()
  }
};

objectData.method(callback, 1, 2);