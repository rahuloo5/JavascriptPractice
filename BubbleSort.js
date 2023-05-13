
const arr = [2,5,3,8,6,4]


const bubbleSort=(arr)=>{
let index =0;
let length = arr.length;

while(index<length){
    let temp ;


for(let j =0 ; j<arr.length;j++){
    if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1]= temp

    }
}
    index++;
}
console.log(arr,"sorted")
}

bubbleSort(arr)



//optimisation 

const bubbleSortOpt=(arr)=>{
    let length = arr.length;
    let swap = false;

    for(let i =0; i<length;i++){
        swap =false
        for(let j =0; j<length;j++){

            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap=true;
            };
 }
 if(!swap){
    break;
}
    }
    console.log(arr,"optimised arr")
}
bubbleSortOpt(arr)

// Complexities
// Worst Case and Average case time complexity 
// If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).

// Best case time complexity
// If the array is already sorted then it is the best-case scenario and its time complexity is O(n)

// Auxiliary Space: O(1)