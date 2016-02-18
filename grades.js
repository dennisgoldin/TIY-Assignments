
function assignGrade(num) {
    var ouput = "";
    if (num <= 100 && num >= 91) {
        console.log("Your grade:  A");
    } else if (num <= 90 && num >= 81) {
        console.log("Your grade:  B");
    } else if (num <= 80 && num >= 71) {
        console.log("Your grade:  C");
    } else if (num <= 70 && num >= 61) {
        console.log("Your grade:  D");
    } else if (num <= 60 && num >= 0) {
        console.log("Your grade:  F");
    return;
};

assignGrade(80);
assignGrade(99);
assignGrade(56);
