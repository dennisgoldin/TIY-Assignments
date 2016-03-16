// code challenge 03-16-2016

function sortABC(str) {
    var arrStr = str.split("");
    //console.log(arrStr);
    arrStr.sort();
    return str + " => " + arrStr.join("");
}

console.log(sortABC("webmaster"));
console.log(sortABC("sillyrbbittricksareforkids"));
