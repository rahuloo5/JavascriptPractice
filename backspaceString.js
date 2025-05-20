var backspaceCompare = function(s, t) {
    let x=[]
    let y =[]

    for(let i =0; i<s.length;i++){
        if(s[i]!=="#"){
            x.push(s[i])
        }else{
            x.pop()
        }
    }
     for(let i =0; i<t.length;i++){
        if(t[i]!=="#"){
            y.push(t[i])
        }else{
            y.pop()
        }
    }
    if(x.length!==y.length){
        return false
    }
   return x.join("")===y.join("")
};
