   maxArea(heights) {
    let max =0;
    let left = 0;
    let right = heights.length-1;
    while(left<right){
        let width = right-left;
        let height =Math.min(heights[left],heights[right])
        let area = height*width;
        max = Math.max(max,area);
        if(heights[left]>=heights[right]){
            right--
        } else{
            left++
        }
    }
    return max
   
    }
