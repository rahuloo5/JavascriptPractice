twoSum(nums, target) {
         let result =[];

        for(let i =0 ; i<nums.length-1;i++){
            for(let j =i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target){
                    result.push(i+1,j+1)
                }
            }
        }
        return result

    }



    twoSum(numbers, target) {
        const mp = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const tmp = target - numbers[i];
            if (mp.has(tmp)) {
                return [mp.get(tmp), i + 1];
            }
            mp.set(numbers[i], i + 1);
        }
        return [];
    }
