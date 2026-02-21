//Assignment (Conditional Statements & Loops)
//intilaize the employee details
interface EmployeeTable {
    employeeName : Array<string>;
    baseSalary : Array<number>;
    experience : Array<number>;
    yearEndRating : Array<number>;
}

let employee: EmployeeTable={
    employeeName : ["Alice Johnson","Bob Smith","Carol Davis","David Brown","Eva Green"],
    baseSalary : [75000.0,68000.0,82000.0,90000.0,60000.0],
    experience : [5.1,3.2,7.1,10.2,2.4],
    yearEndRating : [4.2,3.8,4.5,2.5,3.5]  
}
 //declaring the hike values to calculate.

    //Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
    //Hike % = Hike / Base Salary;

let bonus: number = 5000;
for (let i=0;i<employee.employeeName.length;i++){
if(employee.yearEndRating[i]>=4.0 || employee.experience[i]>5.0)
{
    
    let variablePay: number = 15;
    let hike : number = employee.baseSalary[i]*variablePay +1500+bonus;
     let hikepercentage: number = (hike/employee.baseSalary[i]);
     console.log(employee.employeeName[i]+" with a hike percentage of "+hikepercentage);
}
else if ((employee.yearEndRating[i]>=3.0 && employee.yearEndRating[i]<4.0)|| employee.experience[i]>5.0)
{
    let variablePay: number = 10;
    let hike : number = employee.baseSalary[i]*variablePay+1200+bonus;
    let hikepercentage: number = (hike/employee.baseSalary[i]);
console.log(employee.employeeName[i]+"with a hike percentage of "+hikepercentage);
}
else if (employee.yearEndRating[i]<3.0 || employee.experience[i]<=5.0)
{
    let variablePay: number = 5;
    let hike : number = employee.baseSalary[i]*variablePay+300+bonus;
     let hikepercentage: number = (hike/employee.baseSalary[i]);
     console.log(employee.employeeName[i]+"with a hike percentage of "+hikepercentage);
}
}

