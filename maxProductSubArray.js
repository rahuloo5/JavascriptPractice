var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];
    for(let i =1; i<nums.length;i++){
        let curr = nums[i];
        if(curr<0){
            let tem = max;
            max =min;
            min = tem
        }
        max = Math.max(curr,max*curr)
        min = Math.min(curr,min*curr)

        res = Math.max(res,max)
    }
   return res 
};
