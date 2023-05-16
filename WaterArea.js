const waterArea=(arr)=>{
    let left =0;
    let right = arr.length-1;
    let max =1;

    while(left<right){
        let width = right-left;
        let area = Math.min(arr[left],arr[right])*width;
        max = Math.max(max,area);

        if(arr[left]<=arr[right]){
            left++
        }
        else{
            right--
        }

    }

    console.log(max,"max ater capacity")
}


const arr =[3,7,5,9,2,6];

waterArea(arr)


//tn-o(n) we use two pointer and remember that we reduce minimum height cos this is there best outcome