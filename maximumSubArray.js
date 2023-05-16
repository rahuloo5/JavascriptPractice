const arr =[-2,1,-3,4,-1,2,1,-5,4]


const maxSub=(arr)=>{
    let max =0;

    for(let i =0;i<arr.length;i++){
        let sum=0;
        for(j =i; j<arr.length;j++){
             sum = arr[j]+sum;
            max =Math.max(sum,max)

        }
    }
    console.log(max)
}

maxSub(arr)

//o(n2) brute force 

const optimised =(arr)=>{
    let max =0;
    let currentSum =0;

    for(let i =0; i<arr.length;i++){
        currentSum = Math.max(currentSum+arr[i],arr[i])
        max = Math.max(currentSum,max)
    }
    console.log(max,"maximum")
}

optimised(arr)

//here we are using kadane algo , we check current sum and sumupto that vaue time complex-o(n) space -o(1)