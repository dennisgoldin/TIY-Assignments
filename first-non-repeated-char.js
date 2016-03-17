// code challenge 03-17-2016

function firstNonRepeatedChar(str) {
    var arrStr = str.split("");
    // console.log(arrStr);
    var nonRepeatedChars = "";
    for (var i = 0; i < arrStr.length; i++) {

        for (var j = 0; j < arrStr.length; j++) {
            // console.log(arrStr[j]);
            if (arrStr[j] !== arrStr[i]) {
                nonRepeatedChars += arrStr[j];
            }
        }
    }
    return nonRepeatedChars;
}

console.log(firstNonRepeatedChar("abacddbec"));
