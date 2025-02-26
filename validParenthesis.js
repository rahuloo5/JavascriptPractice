 checkValidString(s) {
        let minLeft =0;
        let maxLeft =0;

        for(let i =0 ; i<s.length;i++){
            if(s[i]=="("){
                minLeft++
                maxLeft++
            } else if(s[i] == ")"){
                minLeft--
                maxLeft--

            } else{
                minLeft--
                maxLeft++
            }
        
        if(maxLeft<0){
            return false
        }
        if(minLeft<0){
            minLeft=0
        }
        }
        return minLeft === 0;
    }

--------------------------------------------------------------

  var checkValidString = function(s) {
    let stack =[];
    let star = [];

    for(let i =0;i<s.length;i++){
        if(s[i]=="("){
            stack.push(i)
        }
        else if(s[i] =="*" ){
            star.push(i)
        } else{
            if(stack.length){
                stack.pop()
            }
            else if(star.length){
                star.pop()
            } else{
                return false
            }
        }
    }

    while(stack.length&&star.length){
        if(stack.pop()>star.pop()){
            return false
        }
    }

    return stack.length ==0
};
