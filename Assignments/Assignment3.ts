//Assignment2- (Arrays/Datatypes/Operators)

//creating array for students names:
let students: Array<string> = ["Suresh","Mahesh","Naresh"];
let marks: Array<number> = [75, 80, 82];
let newMarks = new Set();
//adding 10 marks to each stundent.
for(let i=0;i<marks.length;i++)
{
   let marksOfStudent : number = marks[i];
   marksOfStudent += 10;//assignment operator used.
    console.log(students[i] +" Marks is "+ marksOfStudent);
    //newMarks.push(marksOfStudent);
    newMarks.add(marksOfStudent);
}
//average marks of studnets:
  
//let averageMarks: number =  
console.log("Average value of marks"+" "+ newMarks);


