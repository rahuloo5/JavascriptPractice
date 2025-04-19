var numberOfSubarrays = function(nums, k) {
    
      let prefixCounts = new Map();
    prefixCounts.set(0, 1);
    let oddCount = 0, count = 0;
    
    for (let num of nums) {
        if (num % 2 !== 0) {
            oddCount++;
        }
        if (prefixCounts.has(oddCount - k)) {
            count += prefixCounts.get(oddCount - k);
        }
        prefixCounts.set(oddCount, (prefixCounts.get(oddCount) || 0) + 1);
    }
    
    return count;

}
