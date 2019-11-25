const readlineSync = require("readline-sync");

let height = 0;
let opposite = "##"

console.log("");

do {
      height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

let secondHeight = height;
let thirdHeight = height;

while (secondHeight > 1) {
      space = " " + space
      --secondHeight
}

while (thirdHeight > 1) {
      opposite = opposite + " "
      --thirdHeight
}
console.log("\n" + space + "  " + opposite)

let space = "##";

while (height > 1) {
    let firstSpace = space.replace(" #", "##")
    let firstOpposite = opposite.replace("# ", "##")

    console.log(firstSpace + "  " + firstOpposite)
    --height

    let space = firstSpace
    let opposite = firstOpposite
}
