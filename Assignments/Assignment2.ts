//1. Credit Score:
//If the credit score is above 750, the loan is automatically approved.

// let creditScore:number =720;
// let income:number = 55000; //2. Income:
// let debtToIncomeR1: number = 35.0;
// if (creditScore>750)
// {
//     console.log("Loan is automatically approved");
// }
// //If the credit score is between 650 and 750, additional checks are performed.
// else if(creditScore>=650 && creditScore<=750)
// {
//     console.log("Additional checks are performed");
//     if( income>=50000 && debtToIncomeR1<40.0) //For credit scores between 650 and 750, the customer’s income must be at least $50,000
// //for the loan to be considered.
//     {
//         console.log("loan to be considered."); //
//         console.log("Customer is employed");
//         console.log ("system checks the debt-to-income (DTI) ratio value"+ " " +debtToIncomeR1);
        
//     }   
//     else if (income<50000 && debtToIncomeR1>=40.0)
//     {
//         console.log("Customer is unemployed");
//         console.log("Loan is denied");
//     }
// }
// //If the credit score is below 650, the loan is denied.
// else if(creditScore<650)
// {
//     console.log("Loan is denied");
// }   




/****************************************************************/
//Decalring the customer details.
let customerName : String = "John Doe";
let creditScore1: number = 720;
let income1 : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio: number = 35.0;

if (creditScore1>750)
{
    console.log("Loan is automatically approved for "+customerName);
}
//If the credit score is between 650 and 750, additional checks are performed.
else if(creditScore1>=650 && creditScore1<=750)
    {
    console.log("Additional checks are performed");
    if (isEmployed)
    {
    if( income1>=50000) //For credit scores between 650 and 750, the customer’s income must be at least $50,000
//for the loan to be considered.
    {
        console.log("loan to be considered."); //
        console.log("Customer is employed");
        console.log ("system checks the debt-to-income (DTI) ratio value"+ " " +debtToIncomeRatio);
        
    }   
    else
    {
        console.log("Customer is unemployed");
        console.log("Loan is denied");
    }
}
    }
//If the credit score is below 650, the loan is denied.
else if(creditScore1<650)
{
    console.log("Loan is denied");
}   





