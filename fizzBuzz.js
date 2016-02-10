// Print numbers from 1 to 100
//  If number is multiple of 3 label as "Fizz"
//  If number is multiple of 5 ladel as "Buzz"
//  If number is multiple of both label as "FizzBuzz"

var myOutput = "";

for (var i = 1; i <= 100; i++ ) {
  myOutput = i + " ==> ";
  if (i % 3 === 0) {
    myOutput = myOutput + "Fizz";
  }
  if (i % 5 === 0) {
    myOutput = myOutput + "Buzz";
  }
  myOutput = myOutput + "\n";
  console.log(myOutput);
}
