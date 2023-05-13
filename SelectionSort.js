const selectionSort=(arr)=>{
    for(let i =0; i<arr.length-1;i++){
        let minIndex=i;
        for(let j =i+1; j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex= j;
            }
           
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
       
    }
    console.log(arr,"array")
}

const arr =[2,3,5,4,1,9,8,7,6]

selectionSort(arr)

//worst o(n2)