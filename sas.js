var fandome = "Gotham";
var ieLog = "We don't do that here";
var okLog = "This is where the fun begins ";
var otherLog = "A surprise to be sure but a welcome one";

var switchResult;
switch (fandome) {
    case "Arrowverse":
    switchResult = ieLog;
    break;
    case "Gotham" :
    case "Daredevil" :
    case "Star Wars" :
    switchResult = okLog + fandome; 
    break;
    default :
    switchResult = otherLog;
}

console.log(switchResult);