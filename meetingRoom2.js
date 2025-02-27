minMeetingRooms(intervals) {
                const time = [];
        for (const i of intervals) {
            time.push([i.start, 1]);
            time.push([i.end, -1]);
        }
        console.log(time,"time0")
   
        
        time.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
         console.log(time,"sorted")
        
        let res = 0, count = 0;
        for (const t of time) {
            count += t[1];
            res = Math.max(res, count);
        }
        return res;

    }
