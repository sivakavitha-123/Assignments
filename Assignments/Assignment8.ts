//Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.
let paragraph: string =  "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let SplitParag = paragraph.split(" ");
let searchOfWord : string = "Java";

let countofwordOccurence : number = 0;
for (let i =0;i<SplitParag.length;i++)
{
    if(SplitParag[i] === searchOfWord)
    {
        console.log("Index of Java word is : "+ i);
        countofwordOccurence ++;
    }
}
console.log("Total number of occurrence of Java word in the paragraph is : "+ countofwordOccurence);

