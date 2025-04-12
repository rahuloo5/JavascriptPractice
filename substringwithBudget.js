var equalSubstring = function(s, t, maxCost) {
    let left =0;
    let ans =-1;
    let window =0;

    for(let right =0; right<s.length;right++){
        window = window+(Math.abs(s.charCodeAt(right)- t.charCodeAt(right)));

        while(window>maxCost){
            window= window-(Math.abs(s.charCodeAt(left)-t.charCodeAt(left)));
            left++;
        }
        ans = Math.max(ans,right-left+1)
    }
    
    return ans
};
