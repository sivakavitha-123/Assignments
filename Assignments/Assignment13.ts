// Given a string check if it is a palindrome, or false otherwise.

let s: string = "A man, a plan, a canal: Panama";
s= s.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log(s);
let str :string = "";

for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
}
if (s === str) {
    console.log("string is a palindrome"+ str);
}
else{
    console.log("string is not a palindrome"+ str);
}

