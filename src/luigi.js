const readlineSync = require("readline-sync");

var height = 0;
var space = "##";
var opposite = "##"

console.log("");

do {
      height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

var height2 = height;
var height3 = height;

while (height2 > 1) {
      space = " " + space
      --height2
}

while (height3 > 1) {
      opposite = opposite + " "
      --height3
}

console.log("\n" + space + "  " + opposite)

while (height > 1) {
    var space1 = space.replace(" #", "##")
    var opposite1 = opposite.replace("# ", "##")

    console.log(space1 + "  " + opposite1)
    --height

    var space = space1
    var opposite = opposite1
}
console.log("")
