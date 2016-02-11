// code challenge

function calculateSupply (myAge, myDailyAmount) {
    var myMaxAge = 65;  // constant
    // console.log(myMaxAge);
    var myTimeSpan = myMaxAge - myAge;
    // console.log(myTimeSpan);
    var myTotalAmount = myTimeSpan * myDailyAmount * 365;
    console.log("You will need " + myTotalAmount + " snacks to last you until the ripe old age of " + myMaxAge + ".");
}

calculateSupply(40, 2);
calculateSupply(45, 3);
calculateSupply(50, 4);
