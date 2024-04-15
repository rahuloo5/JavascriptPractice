function linearSearch(arr,target){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
return -1;
};

const all =[1,4,8,22,0]

console.log(linearSearch(all,8),"result");

//big-o o(n)