const minimumSorted=(arr)=>{
    let left = 0;
    let right = arr.length-1;
    console.log(arr[left],"smalledt")
    
    while(left<right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]>arr[right]){
            left = mid+1 
        }
        else {
            right=mid;
        }
    }

    console.log(arr[left],"smalledt")
}

const arr =[6,7,8,9,1,2,3,4,5];
minimumSorted(arr)

//o(logn)

const small=(arr)=>{
    let small =arr[0];

    for(let i =0;i<arr.length;i++){
        if(arr[i]<=small){
            small = arr[i]
        }
    }
    console.log(small,"small")
}
small(arr)