//flipatmostonezero we can only flip 1 zero only to find maximum length

function flipzero(arr){
    let left =0;
    let right =0;
    let len = arr.length;
    let max=0;
    let zercount=0;
    let count=0;
    
    while(right<len){
        console.log(arr[right],"value")
        if(arr[right]==0&&zercount<=1){
            count++;
            zercount++
            max=Math.max(count,max)
             right++
            console.log(right,"rightfirst")
        }
        if(arr[right]==1&&zercount<=1){
            count++
            max=Math.max(count,max)
             right++
             console.log(right,"rightsecond")
        }
        if(zercount>=1 && arr[right]==0){
            count=0;
            zercount=0;
            left=right+1
            console.log(right,"rightthird")
        }
        
       
    }
    return max
}

console.log(flipzero([1,0,1,1,0]))
