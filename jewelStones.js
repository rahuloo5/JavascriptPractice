var numJewelsInStones = function(jewels, stones) {
    let stoneMap ={};
    let count=0;
    for(let i =0; i<stones.length;i++){
        let current = stones[i];
        if(!stoneMap[current]){
            stoneMap[current]=1
        } else{
             stoneMap[current]++
        }
    }
    for(let i =0 ; i<jewels.length;i++){
        if(stoneMap[jewels[i]]){
            count=count+stoneMap[jewels[i]]
        }
    }

    return count
};


------------------------------------------------------------

  const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};
  
