class Name {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
        return "new name added"
    }
}

const newPerson = new Name();
console.log(newPerson,"new Person");
// newPerson("rahul")
// console.log(newPerson,"new person added")
newPerson.name = "rahul"
console.log(newPerson,"name added")
console.log(newPerson.getName(),"get name fnction called")
console.log(newPerson.setName("anjali"),"new name set");
console.log(newPerson.getName(0,"new name"))


let arr = new Array();
console.log(arr,"Array")
console.log(arr.length,"array length");

let newemptyArray = new Array(7);
console.log(newemptyArray,"new empty array")
console.log(newemptyArray[5],"any element")