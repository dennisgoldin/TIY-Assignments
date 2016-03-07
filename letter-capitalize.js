// code challenge 03-07-2016

function LetterCapitalize(str) {
    var myArray = str.split(" ");
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1));
    }
}

LetterCapitalize("day fun dog cat");
