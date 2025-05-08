function check(s){
    if(s=="a" ||s=="e"||s=="i"||s=="o"||s=="u"){
        return true
    }
    return false
}
var maxVowels = function(s, k) {
    let max =0, count=0; 
    for(let i=0;i<k;i++){
        if(check(s[i])){
            count++
        }

    }
    max = count
    for(let i=k; i<s.length; i++){
        if(check(s[i])){
            count++
        }
        if(check(s[i-k])){
            count--
        }
        max = Math.max(max, count)
    }
    return max

    
};

