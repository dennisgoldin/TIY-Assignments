// code challenge 02-25-2016

var myArray = ["red", "blue", "green"];
var mySuffix = { 0 : "st", 1 : "nd", 2 : "rd"}

for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === "red") {
        console.log("My 1" + mySuffix[i] + " choice is " + myArray[i] + ".");
    } else if (myArray[i] === "blue") {
        console.log("My 2" + mySuffix[i] + " choice is " + myArray[i] + ".");
    } else {
        console.log("My 3" + mySuffix[i] + " choice is " + myArray[i] + ".");
    }
}
