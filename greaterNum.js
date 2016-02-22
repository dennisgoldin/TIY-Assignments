// code challenge 2-22-2016
function greaterNum (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1 )  {
        return num2;
    } else {
        return "equal";
    }
}

console.log(greaterNum(2,5));
console.log(greaterNum(7,1));
console.log(greaterNum(3,3));
