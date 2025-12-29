// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var num = prompt("Please! Enter any number!");
// if (num >= 48 && num <= 57) {
//     alert("The input is number.");
// }else if(num >= 65 && num <= 90) {
//     alert("The input is Uppercase Letter.");
// }else if(num >= 97 && num <= 122) {
//     alert("The input is LowerCase Letter");
// }else{
//     alert("The input is not a number or letter.");
// }

// =================================================================================================

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var num1 = prompt("Please! Enter First integer.");
// var num2 = prompt("Please! Enter Second integer.");

// if (num1 > num2) {
//     alert(num1 + " is greater than " + num2);    
// }else if(num1 < num2){
//     alert(num1 + " is Less than " + num2);    
// }else{
//     alert("Both Numbers are equal");
// } 

// =================================================================================================

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num = prompt("Please! Enter Number.");
// if (num > 0) {
//     alert(num + " Number is Positive.");
// }else if(num < 0) {
//     alert(num + " Number is Negative.");
// }else{
//     alert(num + " Numebr is Zero.");
// }

// =================================================================================================

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var vowel = prompt("Please Enter Vowels:").toLowerCase();
// if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
//     alert("True");
// }else{
//     alert("False");
// }
        
// =================================================================================================

// Write a program that 
// b. Asks user to enter his/her password
// let user = Number(prompt("Please Enter Password:"));
// a) Store correct password in a JS variable.
// let password = 1212;
// Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”

// if (user === password) {
//     alert("Correct! The password you entered matches the original password");    
// }else if (user !== password){
//     alert("Please! Enter Correct password");
// }else if(user === null){
//     alert("Please! Enter your password");
// }

// =================================================================================================

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = prompt("Please! Enter Hour's");
// if (hour <= 18) {
//     alert("Good day");
// }else{
//     alert("Good evening");
// }

// =================================================================================================

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements

// let time = prompt("Enter time in 24-hour format (e.g. 1900):");
// if (time >= 0 && time < 1200) {
// alert("Good Morning!");
// }else if(time >=  1200 && time < 1700){
// alert("Good Afternoon!");
// }else if(time >=  1700 && time < 2100){
// alert("Good Evening!");
// }else if(time >=  2100 && time <= 2359){
// alert("Good Night!");
// }else{
//     alert("Invalid Time!");
// }

// =====================================> Array <=================================================
// 1. Declare an empty array using JS literal notation to store student names in future.
// var studentNames = [];
// studentNames.push("Ahmed");
// studentNames.push("Ali");
// console.log(studentNames);
// studentNames.push("Hammad", "Aliyan");
// console.log(studentNames);

// 3. Declare and initialize a strings array.
// var userNames =["Moaaz", "Hassan", "Zain", "Zaid"];
// console.log(userNames);

// 4. Declare and initialize a numbers array.
// var num = [101, 102, 103, 104];
// console.log(num);

// 5. Declare and initialize a boolean array.
// var istrue = [true, false]
// console.log(istrue);

// 6. Declare and initialize a mixed array.
// var mixedArray = ["Moaaz", "Hassan", 101, 102, true];
// console.log(mixedArray);

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil, PhD).
// Show the listed qualifications in your browser like

// document.write(qualifications);
// console.log(qualifications);
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// document.write("<h1>Qualifications:</h1>")
// for(var i=0; i<qualifications.length; i++){
//     document.write((i+1) + ") " + qualifications[i] + "</br>");
// }

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var students =  ["Michael", "Jhon", "Tony"];
// var score = [400, 450, 480];
// var totalmarks = 500;
// for (let i = 0; i < students.length; i++) {
//     var percentages = ((score[i]/totalmarks)*100);
//     document.write("Score of " + students[i] + " is " + score[i] + " .   Percentage: " + percentages + "% </br>");
// }

// 9. Initialize an array with color names. Display the array elements in your browser.
// var colors = [" red", " yellow", " Green "];
// document.write("<b>Initial Color:</b>" + colors + "<br><br>");

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// var colorStart = prompt("Which color do you want to add at the beginning?");
// colors.unshift(colorStart);
// document.write("<b>After adding color at beginning:</b> " + colors + "<br><br>");

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// // Display the updated array in your browser.

// var colorEnd = prompt("Which color do you want to add at the end?");
// colors.push(colorEnd);
// document.write("<b>After adding color at the end:</b> " + colors + "<br><br>");

// // c. Add two more color to the beginning of the array. Display the updated array in your browser. 

// colors.unshift("Aqua", "Brown");
// document.write("<b>After adding two or more color at the beginning:</b> " + colors + "<br><br>");

// // d. Delete the first color in the array. Display the updated array in your browser.
// colors.shift("<b>After deleting color at the beginning:</b> " + colors + "<br><br>");

// // e. Delete the last color in the array. Display the updated array in your browser
// colors.pop();
// colors.shift("<b>After deleting the color at the End:</b> " + colors + "<br><br>");

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// // . Display the updated array in your browser

// var addIndex = Number(prompt("At which index do you want to add a color?"));
// var add = prompt("Enter color in start:");
// colors.splice(addIndex, 0, add);
// document.write("<b>After adding color at desired index:</b> " + colors + "<br><br>");


// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// // Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// var deleteIndex = Number(prompt("At which index do you want to delete color?"));
// var remove = prompt("How many colors do you want to delete?");
// colors.splice(deleteIndex, remove);
// document.write("<b>After adding color at desired index:</b> " + colors + "<br><br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var scoresStudents = [320, 230, 480, 120];
// document.write("<b>Scores of Students:</b> " + scoresStudents + "<br><br>");
// scoresStudents.sort(function(a, b){
//     return a -b;
// }
// );
// document.write("<b>Ordered Scores of Students:</b> " + scoresStudents);


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// document.write("<h1>Cities List:</h1>");
// var cities = ["Karachi", "  Lahore", " Islamabad", " Quetta", " Peshawar"];
// document.write(cities + "<br>");

// document.write("<h1>Selected Cities List:</h1>");
// var copy = cities.slice(2, 4);
// document.write(copy);

// 12. Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];
// var result = arr.join("");
// document.write(result);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
// (FIFO-First In First Out)

// var device = [];
// device.push("Keyboard");
// device.push("Mouse");
// device.push("Printer");
// device.push("Monitor");

// document.write("<b>Devices:</b><br>");
// document.write(device + "<br><br>");

// document.write("<b>Out:</b><br>");
// document.write(device.shift() + "<br>");
// document.write(device.shift() + "<br>");
// document.write(device.shift() + "<br>");
// document.write(device.shift() + "<br>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
// (Last InFirst Out)
// var device = [];
// device.push("Keyboard");
// device.push("Mouse");
// device.push("Printer");
// device.push("Monitor");

// document.write("<b>Devices:</b><br>");
// document.write(device + "<br><br>");

// document.write("<b>Out:</b><br>");
// document.write(device.pop() + "<br>");
// document.write(device.pop() + "<br>");
// document.write(device.pop() + "<br>");
// document.write(device.pop() + "<br>");

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

// var mobiles= ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");

// for (var i = 0; i < mobiles.length; i++) {
//     document.write("<option>" + mobiles[i] + "</option>");
// }
// document.write("</select>");

