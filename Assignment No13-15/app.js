// =====================================> Array <=================================================

// 1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];
studentNames.push(" Ahmed ");
studentNames.push(" Ali ");
// document.write(studentNames);
studentNames.push(" Hammad ", " Aliyan ");
document.write(studentNames  + "</br></br>");

// 3. Declare and initialize a strings array.
var userNames =[" Moaaz ", " Hassan ", " Zain ", " Zaid "];
document.write(userNames + "</br></br>");

// 4. Declare and initialize a numbers array.
var num = [101, 102, 103, 104];
document.write(num + "</br></br>");

// 5. Declare and initialize a boolean array.
var istrue = [true, false]
document.write(istrue + "</br></br>");

// 6. Declare and initialize a mixed array.
var mixedArray = [" Moaaz ", " Hassan ", 101, 102, true];
document.write(mixedArray + "</br></br>");

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil, PhD).
// Show the listed qualifications in your browser like


document.write("<h1>Qualifications:</h1>")
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
for(var i=0; i<qualifications.length; i++){
    document.write((i+1) + ") " + qualifications[i] + "</br></br>");
}

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var students =  ["Michael", "Jhon", "Tony"];
var score = [400, 450, 480];
var totalmarks = 500;
for (let i = 0; i < students.length; i++) {
    var percentages = ((score[i]/totalmarks)*100);
    document.write("Score of " + students[i] + " is " + score[i] + " .   Percentage: " + percentages + "% </br></br>");
}

// 9. Initialize an array with color names. Display the array elements in your browser.
var colors = [" red", " yellow", " Green "];
document.write("<b>Initial Color:</b>" + colors + "<br><br>");

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
var colorStart = prompt("Which color do you want to add at the beginning?");
colors.unshift(colorStart);
document.write("<b>After adding color at beginning:</b> " + colors + "<br><br>");

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// // Display the updated array in your browser.

var colorEnd = prompt("Which color do you want to add at the end?");
colors.push(colorEnd);
document.write("<b>After adding color at the end:</b> " + colors + "<br><br>");

// // c. Add two more color to the beginning of the array. Display the updated array in your browser. 

colors.unshift("Aqua", "Brown");
document.write("<b>After adding two or more color at the beginning:</b> " + colors + "<br><br>");

// // d. Delete the first color in the array. Display the updated array in your browser.
colors.shift("<b>After deleting color at the beginning:</b> " + colors + "<br><br>");

// // e. Delete the last color in the array. Display the updated array in your browser
colors.pop();
colors.shift("<b>After deleting the color at the End:</b> " + colors + "<br><br>");

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// // . Display the updated array in your browser

var addIndex = Number(prompt("At which index do you want to add a color?"));
var add = prompt("Enter color in start:");
colors.splice(addIndex, 0, add);
document.write("<b>After adding color at desired index:</b> " + colors + "<br><br>");


// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// // Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var deleteIndex = Number(prompt("At which index do you want to delete color?"));
var remove = prompt("How many colors do you want to delete?");
colors.splice(deleteIndex, remove);
document.write("<b>After adding color at desired index:</b> " + colors + "<br><br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scoresStudents = [320, 230, 480, 120];
document.write("<b>Scores of Students:</b> " + scoresStudents + "<br><br>");
scoresStudents.sort(function(a, b){
    return a -b;
}
);
document.write("<b>Ordered Scores of Students:</b> " + scoresStudents + "<br><br>");


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("<h1>Cities List:</h1>");
var cities = ["Karachi", "  Lahore", " Islamabad", " Quetta", " Peshawar"];
document.write(cities + "<br><br>");

document.write("<h1>Selected Cities List:</h1>");
var copy = cities.slice(2, 4);
document.write(copy + "<br><br>");

// 12. Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

document.write("<h3>Merge Array with join method.</h3>");
var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
document.write(result + "<br><br>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
// (FIFO-First In First Out)

var device = [];
device.push("Keyboard");
device.push("Mouse");
device.push("Printer");
device.push("Monitor");

document.write("<b>Devices:</b><br>");
document.write(device + "<br><br>");

document.write("<b>Out:</b><br>");
document.write(device.shift() + "<br>");
document.write(device.shift() + "<br>");
document.write(device.shift() + "<br>");
document.write(device.shift() + "<br>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
// (Last InFirst Out)
var device = [];
device.push("Keyboard");
device.push("Mouse");
device.push("Printer");
device.push("Monitor");

document.write("<b>Devices:</b><br>");
document.write(device + "<br><br>");

document.write("<b>Out:</b><br>");
document.write(device.pop() + "<br>");
document.write(device.pop() + "<br>");
document.write(device.pop() + "<br>");
document.write(device.pop() + "<br><br><br>");

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

var mobiles= ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");

for (var i = 0; i < mobiles.length; i++) {
    document.write("<option>" + mobiles[i] + "</option>");
}
document.write("</select>");

