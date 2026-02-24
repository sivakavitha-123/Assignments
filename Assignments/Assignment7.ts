//1. Count the total number of words in the sentence. 

let sentence:string = "Java programming is fun and challenging"; 
let SplitSent = sentence.split(" ");

//1st approach that find the count.
let count : number = 0;
for (let i = 0; i < SplitSent.length; i++) 
    {
        count ++;
      
     let Firstletter = SplitSent[i].charAt(0).toUpperCase() + SplitSent[i].slice(1);
        //Convert the first character of each word to uppercase and print original sentence.
        console.log("Original sentence with first letter of each word capitalized: " + Firstletter);
      
    }
    console .log (" Count of the word in the sentence is : "+ count);
  
   
//2 nd type of approach that find the count.
 let countOfWord : number = SplitSent.length;
console.log ("Count the total number of words in the sentence is :"+ countOfWord );

//2. Print the sentence words in reverse order.

 let ReverseWords = SplitSent.reverse();
console.log ("sentence in the words are in reverse order :"+ ReverseWords +" ");

let reverse : string = " ";
for (let j= sentence.length-1; j>=0;j--)
{
    reverse+=sentence[j]+"";
}
console.log("reversing the letters in the reversed words sentence is " + reverse);


