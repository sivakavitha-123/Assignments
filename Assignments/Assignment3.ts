//Assignment2- (Arrays/Datatypes/Operators)

//creating array for students names:
let students: Array<string> = ["Suresh","Mahesh","Naresh"];
let marks: Array<number> = [75, 80, 82];
let newMarks: Set<number> = new Set<number>();
//adding 10 marks to each stundent.
for(let i=0;i<marks.length;i++)
{
   let marksOfStudent : number = marks[i];
   marksOfStudent += 10;//assignment operator used.
    console.log(students[i] +" Marks is "+ marksOfStudent);
    //newMarks.push(marksOfStudent);
    newMarks.add(marksOfStudent);
}

  let marksArray: number[] = Array.from(newMarks);
let sum: number = 0;
for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
}
//average marks of studnets:
let averageMarks: number = sum / marksArray.length;  
console.log("Average value of marks"+" "+ averageMarks);


