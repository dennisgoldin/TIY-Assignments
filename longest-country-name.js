// code challenge 03-16-2016

function longestCountryName(arr) {
    var longestName = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longestName.length) {
            longestName = arr[i];
        }
    }
    return longestName;
}


console.log(longestCountryName(["Germany", "Australia", "United States of America"]));
console.log(longestCountryName(["Germany", "Australia", "Switzerland"]));
