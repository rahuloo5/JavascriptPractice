canAttendMeetings(intervals) {
         let sortedIntervals = intervals.sort((a,b)=>a.start-b.start);
    
    for(let i =1 ; i<intervals.length;i++){
        if(sortedIntervals[i].start<sortedIntervals[i-1].end){
            return false
        }
    }
    return true
    }
