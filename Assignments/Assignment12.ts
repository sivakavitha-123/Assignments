//Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

//Input: x = 2.00000, n = 10
//Output: 1024.00000

let i :number = 3;
let x: number = 5;

if (i<0){
    x=1/x;
    i=-i;
  for(let j=0; j<i;j++){
     x*=x;
     console.log(x);
  }

  if(i===0){
    console.log(1);
  }
   




}


