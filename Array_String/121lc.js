function maxProfit(prices) {
  let bp = Infinity;
  let sp = -Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (bp > prices[i]) {
      bp = prices[i];
    }
    if (prices[i] - bp > profit) {
      sp = i;
      profit = prices[i] - bp;
    }
  }
  if (sp === -Infinity) {
    profit = 0;
  }
  return profit;
}

// maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);
