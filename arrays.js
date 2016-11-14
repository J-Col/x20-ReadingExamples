function theWorld() {
window.onload= document.getElementById("indexP").innerHTML = milky;
window.onload= document.getElementById("lengthP").innerHTML = milky;
window.onload= document.getElementById("pushP").innerHTML = milky;
window.onload= document.getElementById("stringP").innerHTML = milky;
window.onload= document.getElementById("popP").innerHTML = milky;
window.onload= document.getElementById("shiftP").innerHTML = milky;
window.onload= document.getElementById("deleteP").innerHTML = milky;
//Arrays store multiple values within a single variable
var values = ["Mily Way", 2.00, "Twix"];
//It can also be:
//var values = [
//"Mily Way",
//"Snickers",
//"Twix"];
//To access an array use an index number
var milky = values[0];
//Arrays are best used with array methods
values.length;
//values.length will return 3
values.push("Mars");
//values.push will add the value "Mars" to the variable values
values.toString();
//values.toString() will convert the values to display as words
values.pop();
//values.pop will remove Mars from the string
values.shift();
//values.shift will remove the first element in the array and
//lower the overall count
delete values[2];
//delete will remove the 2.00 from the array

}
