function verbing(str) {
    var end = "ing";
    // console.log(end);
    console.log(str.slice(length-3, length));
    var length = str.length;
    if (length >= 3 && str.slice(length-3) === "ing") {
        str.concat(end)
    } else {
        str.concat("ly");
    }
    return str;
}
console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));
