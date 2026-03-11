let prices: number[]= [7,1,5,3,6,4];

let maxProfit: number = 0;

let BuyDate: number = 0;
let SellDate: number = 0;

for (let i=0;i<prices.length-1;i++) 
    {
    for (let j=i+1;j<prices.length;j++)
         {
        let profit = prices[j] - prices[i];
        if (profit > maxProfit)
             {
            maxProfit = profit;
            BuyDate = i+1;
            SellDate = j+1;
             }

     
    }
}
   if(maxProfit > 0)
            {
    console.log("Maximum profit is: " + maxProfit);
console.log("Buy date: " + BuyDate);
console.log("Sell date: " + SellDate);
            }
