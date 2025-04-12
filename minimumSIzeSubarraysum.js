var minSubArrayLen = function(target, nums) {
    let left =0;
    let right = 0;
    let res =Number.MAX_VALUE;
    let window=0;

    while(right<nums.length){
 window =window+ nums[right];
while(window>=target&&left<=right){
    res = Math.min(res,right-left+1);
    window= window-nums[left]
    left++
}
right++

    }
    return (res == Number.MAX_VALUE) ? 0 : res
};
