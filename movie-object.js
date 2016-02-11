var movie = { title: "Last Air Bender",
              duration: 121,
              stars: ["Little Boy", "Little Girl", "Older Boy"]
            };


function printMovie(myObject) {
    var myOutput = "";
    myOutput = myObject.title + " last for " + myObject.duration + " minutes.  Stars: ";
    for (var i = 0; i < myObject.stars.length; i++) {
        myOutput = myOutput + " " + myObject.stars[i];
        var counter = i;
        // if(myObject.stars.length === counter-1) {
            // myOutput = myOutput + ".";

    }
    // else {
        // myOutput = myOutput + ",";
    // }
    console.log(myOutput);
}

printMovie(movie);
