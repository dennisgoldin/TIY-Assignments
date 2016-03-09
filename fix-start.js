// code challenge 03-09-2016

function fixStart(str) {
    var firstChar = str.charAt(0);
    var strArray = str.split("");
    // console.log(strArray);
    for(var i = 1; i < strArray.length; i++){
        if (strArray[i] === firstChar) {
            strArray[i] = "*";
        }
    }
    console.log(strArray.join(""));
}

fixStart("babble");
fixStart("turtle");
fixStart("racecar");
