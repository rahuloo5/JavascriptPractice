var maximumUniqueSubarray = function(nums) {
    const n = nums.length;
    
    const store = new Set();
    
    let max = 0,
        left = 0,
        sum = 0;
    
    for(let i = 0; i < n; i++) {
        while(store.has(nums[i])) {
            store.delete(nums[left]);
            sum -= nums[left];
            left += 1;
        }
        sum += nums[i];
        store.add(nums[i]);
        max = Math.max(max, sum);
    }
    return max;

};
