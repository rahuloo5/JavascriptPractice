/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let obj={};
    let res =[]
for(let j =0;j<nums.length;j++){
    for(let i =0; i<nums[j].length;i++){
        if(obj[nums[j][i]]){
            obj[nums[j][i]]++
        }else{
            obj[nums[j][i]]=1
        }
    }
}

for(let key in obj){
    if(obj[key]==nums.length){
        res.push(Number(key))
    }
}
return res

};
