// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


let prices =[7,6,4,3,1]

var maxProfit = function(prices) {
    let l =0;
    let profit =0;

    while(l<prices.length){
    let cp =prices[l];
   
    for(let i=l+1;i<prices.length;i++){
        let maxData =0
        if(prices[i]>cp){
            maxData = prices[i]-cp;
            
        }
        if(maxData>profit){
            profit = maxData
        }
    }
    l++
}
return profit;
};

const maxProfit1 = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

console.log(maxProfit1(prices),"profit")