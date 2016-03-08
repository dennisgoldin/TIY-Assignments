// code challenge 03-08-2016

function pigLatin(str) {
    var vowels = {
        "a" : "a",
        "e" : "e",
        "i" : "i",
        "o" : "o",
        "u" : "u" }
    var myArray = str.split(" ");
    for (var i = 0; i < myArray.length; i++) {
        if (vowels[myArray[i].charAt(0)]) {
            // console.log(vowels[str.charAt(0)]);
            str = myArray[i].slice(1) + "ay"
        } else if (myArray[i].charAt(0) === "q" && myArray[i].charAt(1) === "u") {
            str = myArray[i].slice(2) + "quay"
        } else {
            str = myArray[i].slice(1) + myArray[i].charAt(0) + "ay";
        }
        console.log(str);
    }

}
