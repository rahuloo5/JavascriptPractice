const QuickSort =(arr)=>{
    let pivot = arr[arr.length-1];
    let left = [];
    let right =[];

    if(arr.length<=1){
        return arr
    }

    for(let i =0; i<arr.length-1;i++){

        if(arr[i]<pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return [...QuickSort(left),pivot,...QuickSort(right)]

}

const arr =[-6,-2,5,7,1,2,10]

const result = QuickSort(arr);


console.log(result,"result")


// Best-case time complexity of Quick Sort
// The best-case time complexity of Quick Sort is of O(nlog(n)).

// The log(n) comes from the number of decompositions (divisions into subarrays) that have to be done. Then we have O(n) comparisons per decomposition.
// Worst-case time complexity of Quick Sort
// The worst-case time complexity of Quick Sort is of O(n^2).

// The worst case is when we have a sorted array and we start from the smallest or largest value; this requires n decompositions, and with n comparisons per decomposition, this results in O(n^2). So, the Big O of Quick Sort is n^2 – quadratic time complexity.

// To prevent this worst case, it is best to pick a middle or random value when selecting the pivot. The first (as in this example) or last element of the array are often chosen for simplicity.