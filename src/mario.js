const readlineSync = require("readline-sync");

var theHeight = 0;
var space = "##";

console.log("");

do {
      theHeight = Number(readlineSync.question("Height: "));
} while (theHeight < 1 || theHeight > 24 || Number.isNaN(theHeight) || !Number.isInteger(theHeight));

var theHeight2 = theHeight;

while (theHeight2 > 1) {
      space = " " + space
    --theHeight2
}

console.log("\n" + space)

while (theHeight > 1) {
    var space1 = space.replace(" #", "##")
    console.log(space1)
    --theHeight
    var space = space1
}
console.log()
