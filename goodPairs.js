/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    
    return count;
};
..................................................................................

var numIdenticalPairs = function(nums) {
  let countMap ={};
  let sum=0

  for(let i =0 ; i<nums.length;i++){
    if(countMap[nums[i]]){
        countMap[nums[i]]++
    }else{
         countMap[nums[i]]=1
    }
  }

for(let key in countMap){
let n = countMap[key];
sum = sum +(n*(n-1)/2);
}
return sum
};
