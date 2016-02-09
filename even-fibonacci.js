// Fibonacci number = previous + one before previous
// Normal Mode

var sum = 0;
var curVal = 0;
var maxVal = 4000000;
var fSeq = [0, 1];

for(var i = 2; curVal < maxVal; i++) {
    fSeq[i] = fSeq[i-2] + fSeq[i-1];
    if (fSeq[i] % 2 === 0) {
        sum = sum + fSeq[i];
        console.log(fSeq[i]);
    }
    curVal = fSeq[i];
}
console.log("\nSum of all the even numbers in sequence less than " + maxVal + " = " + sum);
