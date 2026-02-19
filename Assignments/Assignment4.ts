

//Storing the transaction values in an array.

let transactionAmount: Array<number> = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

//1.Print total number of credit and debit transactions completed.
let credCount: number =0;
let dedCount: number =0;
let creditAmount: number = 0;
let debitAmount:number = 0;
for(let i=0;i<transactionAmount.length;i++)
{
    if(transactionAmount[i]>0)
    {
     credCount ++;
     creditAmount = creditAmount+transactionAmount[i];
     if (transactionAmount[i]>10000)
     {
     console.log ("Suspicious credit transaction with amount"+ " "+transactionAmount[i]);
     }

    }
    else{
        dedCount ++;
        debitAmount = debitAmount+transactionAmount[i];
         if (transactionAmount[i]<-10000)
     {
        console.log ("Suspicious deduct transaction with amount"+ " "+transactionAmount[i]);
     }
    }
}
//1.Print total number of credit and debit transactions completed.
console.log("Total number of the credit transaction is "+ " "+ credCount);
console.log("Total number of the Deduction transaction is "+ " "+ dedCount);

//2. Print the total amount credited and debited in account.
console.log("Total amount credited in account is "+ " "+ creditAmount);
console.log("Total amount debited in account is "+ " "+ debitAmount);
//3.Print total amount remaining at the end in Bank Account
let totalAmount : number = creditAmount+debitAmount;
console.log("Total amount remaining at the end in Bank Account"+" "+ totalAmount);
// If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions


     
