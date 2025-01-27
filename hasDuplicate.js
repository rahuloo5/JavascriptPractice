hasDuplicate(nums) {
        const duplicateMap ={};

        for(let i =0 ; i<nums.length;i++){
            if(duplicateMap[nums[i]]){
                duplicateMap[nums[i]]++
            } else{
                duplicateMap[nums[i]] = 1
            }
        }
        for(let key in duplicateMap){
            if(duplicateMap[key]>1){
                return true
            } 
        }
         return false
    }
