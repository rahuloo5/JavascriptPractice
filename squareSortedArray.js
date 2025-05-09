/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l =0;
    let r = nums.length-1;
    let res =new Array(nums.length);
    for(let i =nums.length-1;i>=0;i--){
        if(Math.abs(nums[l])>Math.abs(nums[r])){
            res[i] = nums[l]*nums[l];
            l++
        }else{
            res[i] = nums[r]*nums[r]
            r--
        }
    }
    return res
};
