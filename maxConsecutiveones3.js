/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left =0;
    let right =0;
    let maxLen =0;
    let zeroes =0

    while(right<nums.length){
        if(nums[right]==0){   
            zeroes++            
        }
while(zeroes>k){
    if(nums[left]==0){
        zeroes--
    }
    left++
}
maxLen = Math.max(maxLen,right-left+1)

        right++
    }

    return maxLen
}
