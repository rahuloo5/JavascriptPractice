var maxProfit = function(prices) {
    let Maxprofit =0;
    let cp = prices[0];

    for(let i =1 ; i<prices.length;i++){
      let sp =prices[i]
   
      if(sp>cp){
          let profit = sp-cp
        
          Maxprofit = Math.max(profit,Maxprofit)
         
      } else {
          cp = sp;
      }
        

    }
    return Maxprofit
};

-------------------------------------------
   maxProfit(prices) {
        let maxP = 0;
        let minBuy = prices[0];

        for (let sell of prices) {
            maxP = Math.max(maxP, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }
        return maxP;
    }
