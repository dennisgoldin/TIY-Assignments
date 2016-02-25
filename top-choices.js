// code challenge 02-25-2016

var myArray = ["red", "blue", "green"];

for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === "red") {
        console.log("My 1st choice is " + myArray[i] + ".");
    } else if (myArray[i] === "blue") {
        console.log("My 2nd choice is " + myArray[i] + ".");
    } else {
        console.log("My 3rd choice is " + myArray[i] + ".");
    }
}
