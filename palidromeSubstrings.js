var countSubstrings = function(s) {
    let res =0;

    for(let i =0; i<s.length;i++){
        res+=count(s,i,i);
        res+=count(s,i,i+1);

    }
    function count(s,l,r){
        let res =0;
        while(l>=0&&r<s.length&& s.charAt(l)===s.charAt(r)){
            res++
            l--;
            r++; 
        }
return res
    }
    return res
};
