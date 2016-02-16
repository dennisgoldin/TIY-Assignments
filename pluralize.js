
function pluralize (num, str) {

    if (num > 1) {
        str = num + " " + str + "s" + "\n";
    } else {
        str = num + " " + str + "\n";
    }
    return str;
}

var myOutput = pluralize(5, "cat") + pluralize(1, "dog") + pluralize(2, "bird");

console.log(myOutput);
