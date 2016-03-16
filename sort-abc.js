// code challenge 03-16-2016

// function sortABC(str) {
//     var arrStr = str.split("");
//     //console.log(arrStr);
//     arrStr.sort();
//     return str + " => " + arrStr.join("");
// }
//
// console.log(sortABC("webmaster"));
// console.log(sortABC("sillyrbbittricksareforkids"));


code challenge 03-16-2016

function sortABC(str) {
    // var arrStr = str.split("");
    // arrStr.sort();
    // return str + " => " + arrStr.join("");
    return str + " => " + str.split("").sort().join("");
}

console.log(sortABC("webmaster"));
console.log(sortABC("sillyrbbittricksareforkids"));
