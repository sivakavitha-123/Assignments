//Print the numbers in diamond-shaped pyramid of numbers.


 

let n: number = 5; // Number of rows in the first half of the diamond
for (let i =0;i<=n;i++){
    let Dia = " ";
    //For Spaces
    for (let j=1;j<=n-i;j++){
        Dia += " ";

    }
    for (let k=1;k<=i;k++){
        Dia += k+" ";
    }
    console.log(Dia);
}

//Number of rows in the second half of the diamond
for (let i=n-1;i>=1;i--)
{
    let Dia = " ";
    //For Spaces
    for (let j=1;j<=n-i;j++){
        Dia += " ";
}
    for (let k=1;k<=i;k++){
        Dia += k+" ";
    }
    console.log(Dia);
}