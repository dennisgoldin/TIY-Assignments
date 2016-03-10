// code challenge 03-10-2016

function mixUp(str1, str2) {
    var beginStr1 = str1.charAt(0) + str1.charAt(1);
    var beginStr2 = str2.charAt(0) + str2.charAt(1);
    beginStr1 += str2.slice(2);
    beginStr2 += str1.slice(2);
    console.log(beginStr2 + " " + beginStr1);
}


mixUp("dog","dinner");
mixUp("mix","pod");
