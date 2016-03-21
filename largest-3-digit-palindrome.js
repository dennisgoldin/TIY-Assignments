// code challenge 3-21-2016
// HAD NO CLUE ON THIS CHALLENGE
// FOLLOWING ANSWER IS FROM LINK:
// http://stackoverflow.com/questions/21286890/find-the-largest-palindrome-made-from-the-product-of-two-3-digit-numbers-javas

function largestPalindrome(){

    var arr = [];
    for(var i =999; i>100; i--){
        for(var j = 999; j>100; j--){
            var mul = j*i;
            if(isPalin(mul)){
                arr.push(j * i);
            }
        }
    }

    return Math.max.apply(Math, arr);
}

function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
}

console.log(largestPalindrome());
