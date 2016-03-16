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


// Byron's awesome answer
// function longest_country_name(arr){
//   console.log(arr);
//   arr.sort(function (a, b) { return b.length - a.length })[0];
//   console.log(arr);
//   console.log(arr[0]);
// }
// ​
// ​
// longest_country_name(['Abyssinia', 'Bechuanaland', 'Grain Coast', 'Songhay', 'Stellaland', 'Kingdom of Tungning', 'British North Borneo', 'Gorkhali', 'Kampuchea', 'Mustang, Kingdom of', 'Inini', 'Confœderatio Helvetica', 'Pridnestrovia', 'Spitzbergen'])
