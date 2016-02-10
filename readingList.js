//  Reading listitem

var myReadingList = [ ["Ghost Girls", "Laura Spinella", false],
                      ["Fantastic Beasts and Where to Find Them", "J. K. Rowling", false],
                      ["Stephen King", "The Bazaar of Bad Dreams: Stories", true],
                      ["Dr. Seuss", "Green Eggs and Ham", false],
                      ["R.A. Salvator", "Forgotten Realms: The Legend of Drizzt", true] ];

// console.log(myReadingList);
for (var i = 0; i < myReadingList.length; i++) {
  // console.log(myReadingList[i]);
  // console.log(myReadingList.length);
  var myOutput = "";
  var myIndex = 0;
  var myList = myReadingList[i];
  //  console.log(myList);
  //  console.log(myList.length);
    myOutput = myOutput + myList[myIndex] + " by " + myList[myIndex + 1];
    // console.log(myOutput);
    if (myList[myIndex+2]) {
      myOutput = myOutput + " ==> You have already read.\n";
    } else {
      myOutput = myOutput + " ==> You have not read.\n";
    }
    console.log(myOutput);
}
