var maxProfit = function(prices) {
    let max =0;
    let cp = prices[0]
    for(let i =1;i<prices.length;i++){
        let sp = prices[i];
        if(sp>cp){
            let profit = sp-cp;
            console.log(profit,"prfoit")
            max = max +profit
            console.log(max,"max")
        } 
            cp=sp
        
    }
    return max
};
