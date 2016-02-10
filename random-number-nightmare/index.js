document.querySelector("body").style.fontFamily = "Verdana";
document.querySelector("#myInput").style.fontSize = "18px";
document.querySelector("#myButton").style.fontSize = "16px";
document.querySelector("#myButton").style.background = "lightcoral";

var myButton = document.querySelector("#myButton");
var myOutput = document.querySelector("#myOutput");
var myInput = document.querySelector("#myInput");
var myRandomNumber = getRandomIntInclusive(1, 10);
console.log("Random Number = " + myRandomNumber);

document.querySelector("#myButton").addEventListener('click', function () {
  // console.log("Button was clicked!");
  var myInputValue = parseInt(myInput.value);
  // console.log("myInputValue=" + myInputValue);
  myInput.value = "";
  myOutput.textContent = checkValue(myInputValue);
});

function checkValue(myValue) {
    var myMessage = "";
    myMessage = myMessage + "You picked  => " + myValue + " <= ";
    // console.log("checkValue() : myMessage=" + myMessage);
    if (isNaN(myValue) || myValue < 1 || myValue > 10) {
      myMessage = "Please enter a number between 1 and 10 :-)";
    } else if (myValue === myRandomNumber) {
      // console.log("IF : myMessage=" + myMessage);
      myMessage = myMessage + "  You WIN !!! ** Reload to play again **";
      // console.log("IF : myMessage=" + myMessage);
    } else if (myValue > myRandomNumber) {
      myMessage = myMessage + "To high... Try again!";
      // console.log("ELSE IF : myMessage=" + myMessage);
    } else {
      myMessage = myMessage + "Too low... Try again!";
      // console.log("ELSE : myMessage=" + myMessage);
    }
    return myMessage;
}

//*****************************************************************************
// getRandomIntInclusive() is code from MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// ****************************************************************************
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
