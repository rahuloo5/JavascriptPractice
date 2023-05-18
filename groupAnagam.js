const groupAnagam =(arr)=>{

    let sortedArray = arr.map((word)=>word.split("").sort().join(""));
    console.log(sortedArray,"sortedArray");

    let map ={};

    for(let i =0;i<sortedArray.length;i++){
        if(!map[sortedArray[i]]){
            map[sortedArray[i]] = [arr[i]]
        }else {
            map[sortedArray[i]].push(arr[i])
        }
    }
    let result = Object.values(map);
    console.log(result,"result")


}

const arr = ["tea","eat","ate","but","nat","tan"]
groupAnagam(arr)