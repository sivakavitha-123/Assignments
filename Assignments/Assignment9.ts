//Assignment: Write a program to print * in triangle pattern

let rows: number =5;
for (let i=0;i<rows;i++)
{
    let star: string = "";
    //For Spaces
    for (let j=0;j<rows-i-1;j++)
    {
        star += " ";
    }
    for (let j=0;j<=i;j++)
    {
        star += "*";
        
    }
    console.log(star);
    

}

//Write a program to print * in triangle pattern


