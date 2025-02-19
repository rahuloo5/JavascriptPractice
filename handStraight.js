isNStraightHand(hand, groupSize) {
                if (hand.length % groupSize !== 0) {
            return false;
        }
        const count = {};
        for (const num of hand) {
            count[num] = (count[num] || 0) + 1;
        }
        console.log(count,"count")
        hand.sort((a, b) => a - b);
        console.log(hand,"hand")
        for (const num of hand) {
            console.log(num,"num")
            if (count[num] > 0) {
                for (let i = num; i < num + groupSize; i++) {
                    console.log(num+groupSize,"size")
                    if (!count[i]) return false;
                    count[i] -= 1;
                    console.log(count,"countafter")
                }
            }
        }
        return true;

    }
