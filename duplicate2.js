var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];

    if (map.has(number)) {
      difference = Math.abs(i - map.get(number));
      if (difference <= k) return true;
    }
    
    map.set(number, i);
  }
  return false  
};
