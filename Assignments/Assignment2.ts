//Assignment2- (Arrays/Datatypes/Operators)

//creating array for students names:
let students: Array<string> = ["Suresh","Mahesh","Naresh"];
let marks: Array<number> = [75, 80, 82];
let newMarks: number[]=[];
//adding 10 marks to each stundent.
for(let i=0;i<marks.length;i++)
{
   let marksOfStudent : number = marks[i];
   marksOfStudent += 10;//assignment operator used.
    console.log(students[i] +" Marks is "+ marksOfStudent);
    newMarks.push(marksOfStudent);
}

//average marks of studnets:
   let sum: number = 0;
for(let i = 0; i < newMarks.length; i++)
{
    sum += newMarks[i];
}
let averageMarks: number = sum / newMarks.length; 
console.log("Average value of marks"+" "+ averageMarks);


