//Prime number assignment

const num: number =7; //taken the prime Number as 7 to check whether it is prime or not.
let primeNumber: boolean = true; //
if(num<=1) //1 has only one divisor (1 itself), which is not sufficient for it to be considered prime.
{
    console.log(num+" it is not a prime number"+"Boolean value is"+primeNumber);
    primeNumber=false;
}
for (let i:number =0;i<num;i++)
{
    while(num%i==0)
    {
        primeNumber=false;
    }
    
}
if(primeNumber)
{
    console.log(num+" is a prime number");
}
else{
    console.log(num+" is not a prime number");
}