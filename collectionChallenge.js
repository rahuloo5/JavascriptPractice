// Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array
// slice method on array can be used to fetch the values of range in the array
// splice method on array can be used to replace the value of range in the array

const arr1 = [1,2,3,4,5,6]
const arr2 = [7,8,9,10,11,12]

let mediumfirst = arr1.length/2-1;
let mediumsecond = arr2.length/2-1;

arr1.splice(mediumfirst,3,...arr2.slice(mediumsecond,mediumsecond+3));

console.log(arr1,"result")


// Q. Sort the given array of objects in ascending order according the authors lastname
// Example
const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
    { name: "Warcross", author: "Marie Lu" },
]


let result = books.sort((book1,book2)=>{
    let firstlastName = book1.author.split(" ")[1]
    let secondlastName = book2.author.split(" ")[1]
    return firstlastName>secondlastName ?1 : -1
});
console.log(result,"books")

// Write a code to generate an array with range of numbers and shuffle them
// An array of numbers in the range can be generated from a function which can take start and end value of the range
// The shuffling can be achieved simply by sorting the array using a function which randomly returns positive or negative numbers
// The shuffling of the values can be also done by picking a value from a random index from the current array and moving it in to a new array

function rangeNumber(start,end){
    let arr =[];
    for(let i =start; i<=end;i++){
        arr.push(i)
    }

    return arr
}

let rangearr = rangeNumber(1,10)
rangearr.sort((ele)=>0.5-Math.random()*ele)
console.log(rangearr,"range number")

// Q. Check if the user with the name "John" exists in the array of objects
let arr = [{name:"rahul"},{name:"anjali"},{name:"shiv"},{name:"johm"}]
const doesJohnExist = arr.some((obj) => obj.name === "John");
const jonhObject = arr.find((obj) => obj.name === "John");
const doesJohnExist1 = jonhObject ? true : false;
const jonhIndex = arr.findIndex((obj) => obj.name === "John");
const doesJohnExist2 = jonhIndex < 0 ? false : true;

const employee =[{job:"enginerr",firstName:"rahul",lastName:"tomar"},{job:"manager",firstName:"anjali",lastName:"bhadouria"},{job:"baby",firstName:"shiv",lastName:"tomar"}]

let newemployee= employee.map((obj)=>{
    return {job:obj.job,fullName: obj.firstName + " " + obj.lastName}
})
console.log(newemployee,"newemployeedata")