// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var num = prompt("Please! Enter any number!");
if (num >= 48 && num <= 57) {
    alert("The input is number.");
}else if(num >= 65 && num <= 90) {
    alert("The input is Uppercase Letter.");
}else if(num >= 97 && num <= 122) {
    alert("The input is LowerCase Letter");
}else{
    alert("The input is not a number or letter.");
}

// =================================================================================================

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var num1 = prompt("Please! Enter First integer.");
var num2 = prompt("Please! Enter Second integer.");

if (num1 > num2) {
    alert(num1 + " is greater than " + num2);    
}else if(num1 < num2){
    alert(num1 + " is Less than " + num2);    
}else{
    alert("Both Numbers are equal");
} 

// =================================================================================================

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num = prompt("Please! Enter Number.");
if (num > 0) {
    alert(num + " Number is Positive.");
}else if(num < 0) {
    alert(num + " Number is Negative.");
}else{
    alert(num + " Numebr is Zero.");
}

// =================================================================================================

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt("Please Enter Vowels:").toLowerCase();
if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
    alert("True");
}else{
    alert("False");
}
        
// =================================================================================================

// Write a program that 
// b. Asks user to enter his/her password
let user = Number(prompt("Please Enter Password:"));
// a) Store correct password in a JS variable.
let password = 1212;
// Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”

if (user === password) {
    alert("Correct! The password you entered matches the original password");    
}else if (user !== password){
    alert("Please! Enter Correct password");
}else if(user === null){
    alert("Please! Enter your password");
}

// =================================================================================================

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = prompt("Please! Enter Hour's");
if (hour <= 18) {
    alert("Good day");
}else{
    alert("Good evening");
}

// =================================================================================================

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements

let time = prompt("Enter time in 24-hour format (e.g. 1900):");
if (time >= 0 && time < 1200) {
alert("Good Morning!");
}else if(time >=  1200 && time < 1700){
alert("Good Afternoon!");
}else if(time >=  1700 && time < 2100){
alert("Good Evening!");
}else if(time >=  2100 && time <= 2359){
alert("Good Night!");
}else{
    alert("Invalid Time!");
}
