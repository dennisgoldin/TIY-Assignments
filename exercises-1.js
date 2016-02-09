/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()

var array = [ 4, 9, 5, 7, 1 ];
console.log(array.sort());

// .concat()

var array1 = [ 5, 7, 1 ];
var array2 = [ 8, 9, 10 ];
var array3 = array1.concat(array2);
console.log(array3);

// .indexOf()

var array = [ 4, 9, 5, 7, 1 ];
console.log(array.indexOf(4));
console.log(array.indexOf(9));
console.log(array.indexOf(5));
console.log(array.indexOf(7));
console.log(array.indexOf(1));

// .split()

var text = "This is a collection of words.";
var array1 = [text.split()];
console.log(array1);
var array2 = text.split(" ");
console.log(array2);
var array3 = text.split(" ", 3);
console.log(array3);

// .join()

var array1 = [ 1, 2, 3, 4, 5 ];
console.log(array1);
console.log(array1.join());
console.log(array1.join("+"));
console.log(array1.join(" <--> "));

// .pop()

var array1 = [ 1, 2, 3, 4, 5 ];
console.log(array1.pop());
console.log(array1);
console.log(array1.pop());
console.log(array1);
console.log(array1.pop());
console.log(array1);

// .push()

var array1 = [ 1 ];
console.log(array1);
console.log(array1.push(2));
console.log(array1);
console.log(array1.push(3));
console.log(array1);
console.log(array1.push(4));
console.log(array1);

// .slice()

var array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array1);
console.log(array1.slice(3));
console.log(array1.slice(3, 5));

// .splice()

var array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array1);
console.log(array1.splice(1));
console.log(array1 + "\n");

var array2 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array2);
console.log(array2.splice(2, 2));
console.log(array2 + "\n");

var array3 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array3);
console.log(array3.splice(2, 2, "99", "98", "97"));
console.log(array3 + "\n");

// .shift()

var array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array1);
console.log(array1.shift());
console.log(array1);

// .unshift()
var array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array1);
console.log(array1.unshift(0));
console.log(array1);
console.log(array1.unshift( -2, -1));
console.log(array1);

// .filter()

var array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array1);

function isBig(val) {
  return val > 3;
}

function isSmall(val) {
    return val <= 3;
}

console.log(array1.filter(isSmall));
console.log(array1.filter(isBig));

// .map()

var array1 = [ 16, 25, 81 ];
console.log(array1);

var array2 = array1.map(Math.sqrt);
console.log(array2);
