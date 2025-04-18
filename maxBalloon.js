var maxNumberOfBalloons = function(text) {
    
    let ballonMap={}
    for(let i =0 ; i<text.length;i++){
        if(text[i]=="b" ||text[i]=="a"  || text[i]=="l" ||text[i]=="o"  || text[i]=="n"  ){
            if(ballonMap[text[i]]){
                ballonMap[text[i]]++
            }else{
                ballonMap[text[i]]=1
            }
        }
    }
    let single = Math.min((ballonMap["b"]||0),(ballonMap["a"]||0),(ballonMap["n"]||0))
    let double =  Math.min((ballonMap["l"]||0),(ballonMap["o"]||0))
    let res = Math.min(Math.floor(double/2),single)
    return res
};
