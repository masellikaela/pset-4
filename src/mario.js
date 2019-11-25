const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;

let height = 0
let space = "##";

console.log("");

do {
      height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

let secondHeight = height;

while (secondHeight > 1) {
      space = " " + space
    --secondHeight
}

console.log("\n" + space)

while (height > 1) {
    let firstSpace = space.replace(" #", "##")
    console.log(firstSpace)
    --height
    let space = firstSpace
}
console.log()
