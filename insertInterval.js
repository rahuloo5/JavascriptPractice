var insert = function(intervals, newInterval) {

    let res =[];
    for(let interval of intervals){
        if(newInterval == null || interval[1]<newInterval[0]){
            res.push(interval)
        } else if(newInterval[1]<interval[0]){
            res.push(newInterval);
            res.push(interval);
            newInterval =null

        } else{
            newInterval[0]= Math.min(interval[0],newInterval[0]);
            newInterval[1] = Math.max(interval[1],newInterval[1])
        }
    }
    if(newInterval !==null){
        res.push(newInterval)
    }
   return res 
};
