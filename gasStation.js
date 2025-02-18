function canCompleteCircuit(gas, cost) {
        if (gas.reduce((acc, val) => acc + val, 0) <
            cost.reduce((acc, val) => acc + val, 0)) {
            return -1;
        }

        let total = 0;
        let res = 0;
        for (let i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            console.log(total,"toatl")

            if (total < 0) {
                total = 0;
                res = i + 1;
                console.log(res,"res")
            }
        }

        return res;

    }
