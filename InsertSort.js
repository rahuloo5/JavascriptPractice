const insertSort=(arr)=>{

    for(let i=1;i<arr.length;i++){
        let curr = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;

    }
console.log(arr,"array")
}

const arr = [2,8,5,9,7,5,6]

insertSort(arr)