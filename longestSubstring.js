 longestPalindrome(s) {

     let res = "";
        let resLen = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                let l = i, r = j;
                while (l < r && s[l] === s[r]) {
                    l++;
                    r--;
                }

                if (l >= r && resLen < (j - i + 1)) {
                    res = s.slice(i, j + 1);
                    resLen = j - i + 1;
                }
            }
        }

        return res;


    }


---------------------------------------------------------------


  longestPalindrome(s) {
        let resIdx = 0;
        let resLen = 0;

        for (let i = 0; i < s.length; i++) {
            // odd length
            let l = i;
                let r = i;
            while (l >= 0 && r < s.length &&
                   s.charAt(l) === s.charAt(r)) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }

            // even length
            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length &&
                   s.charAt(l) === s.charAt(r)) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }
        }

        return s.substring(resIdx, resIdx + resLen);
    }
