function countTags(str) {
    var html = "<p> <p> <p> <img>";
    var tokens = html.split(" ");
    var count = 0;
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].includes(str)) {
            count++;
        }
    }
    console.log("There are " + count + " tags of type " + str + " in the page.");
}

countTags('p');
