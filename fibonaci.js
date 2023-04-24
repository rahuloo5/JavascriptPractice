// 1-20

const fibonaciSeries =(number)=>{

    let arr = [];
    arr[0] =0;
    arr[1]=1
for(let i = 2; i<number;i++){
    arr[i] = arr[i-1]+arr[i-2]
};
return arr;
}


const fiboSeries = fibonaciSeries(20);

console.log(fiboSeries,"fibonaci series")


const num =[]
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

num[0] = arr1;
num[1] = arr2;

console.log(num,"multi dimensional array")
