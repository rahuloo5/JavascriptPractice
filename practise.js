const merge=(left, right)=>{

    let result =[];
    while(left.length && right.length){

        if(left[0]>right[0]){
            result.push(right.shift())
        }else{
            result.push(left.shift())
        }

    }
    return [...result,...left,...right]

}


const mergeSort = (arr)=>{

    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid));

return merge(left,right)
}

let arr = [2,3,5,4,8,7,9];

let result =mergeSort(arr)
console.log(result,"result")