var getAverages = function(nums, k) {
let res = Array(nums.length).fill(-1);
    let winSum = 0;
    let winLen = 2 * k + 1;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (r - l + 1 > winLen) {
            winSum -= nums[l];
            l++;
        }
        
        winSum += nums[r];

        if (r - l + 1 == winLen) {
            let i = r - k;
            res[i] = parseInt(winSum/winLen);
        }
    }

    return res;
};
