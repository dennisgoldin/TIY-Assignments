// vanilla JavaScript
function helloWorld (code) {
    var spanish = "es";
    var english = "en";
    var german = "de";
    var output = "";

    if (code.toString() == spanish.toString()) {
        output = "Hola Mundo";
    } else if (code.toString() == german.toString()) {
        output = "Hallo Welt";
    } else {
        output = "Hello World"
    }
    return output;
}

helloWorld("en");
helloWorld("es");
helloWorld("de");

helloWorld("xyz");
