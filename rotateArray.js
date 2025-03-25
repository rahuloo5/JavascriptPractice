const arr =[1,2,3,4,5,6]


let count=2;

while(count>0){
    let a = arr[0];
    for(let i =0; i<arr.length-1;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1]=a;
    a=0;
    count--
}

console.log(arr,"rotate 2 times")


function rotateArray(arr){
    
    rev(arr,0,1)
    rev(arr,2,arr.length-1)
    rev(arr,0,arr.length-1)
    
    
    function rev(arr,i,j){
        while(i<=j){
            let tmp = arr[j];
            arr[j]= arr[i];
            arr[i]=tmp;
            i++;
            j--;
        }
    }
    return arr
}

console.log(rotateArray(arr),"answer")
