// Hard Mode - Find the sum of all the multiples of 3 or 5 below 1000.
var count = 0;
var sum = 0;
var maxVal = 1000;

for(var i = 1; i < maxVal; i++) {
    if ( i % 3 === 0 || i % 5 === 0 ) {
        sum = sum + i;
        count++;
        //console.log(i + "\n");
    }
}
console.log("\nTotal numbers of 3 or 5 mutiples below " + maxVal + ": " + count);
console.log("Sum of all the mutiples of 3 or 5 less than " + maxVal + " = " + sum);
