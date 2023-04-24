// Every

const num = [1,2,3,4,5];

const isEven = (num)=>{
    if(num%2==0){
        return true
    } else {
        return false
    }
}

console.log(num.every(isEven))
console.log(num.some(isEven))

// coppWithnin

const arr= [1,2,3,4,5,6,7,8,9]

const copyArr = arr.copyWithin(2,3)
console.log(copyArr,"copy arr")


// includes 

console.log(arr.includes(5),"include without position");
console.log(arr.includes(5,6),"includes with index value")