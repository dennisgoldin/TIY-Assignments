
    var myBody = document.querySelector("body");
    myBody.style.fontFamily = "Verdana";

    var myFullName = document.getElementById("fullname");
    myFullName.textContent = "Dennis Goldin";

    var myLocation = document.getElementById("hometown");
    myLocation.textContent = "Apex, NC";

    var myMovie = document.getElementById("movie");
    myMovie.textContent = "Guardians of the Galaxy";

    var myFood = document.getElementById("food");
    myFood.textContent = "Beef";

    // var myUl = document.querySelector("ul");
    var myLi = document.getElementsByTagName("li");

    for (var i = 0; i < myLi.length; i++) {
      myLi[i].className = "listitem";
      myLi[i].style = "color:red";
    }

    var myImage = new Image(200, 200);
    myImage.src = "./Dennis.Goldin.Selfie.jpg";
    // console.log(myImage);
    myBody.appendChild(myImage);
