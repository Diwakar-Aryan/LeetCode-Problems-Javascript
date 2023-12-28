var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      profit = profit + (prices[i] - prices[i - 1]);
    }
  }

  return (profit);
};
maxProfit([7, 6, 4, 3, 1]);
