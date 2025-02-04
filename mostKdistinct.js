var mostKdistinct = function(s,k) {
    const hashMap = new Map();
    let left = 0, maxLen = 0;
	for (let right = 0; right < s.length; right++) {
		const rightString = s[right];
        hashMap.set(rightString, hashMap.get(rightString) + 1 || 0);
        console.log(hashMap,"mapp")
        while (hashMap.size > 2) {
            const leftString = s[left];
            if (hashMap.get(leftString) === 0) {
                hashMap.delete(leftString);
            } else {
                hashMap.set(leftString, hashMap.get(leftString) - 1);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
