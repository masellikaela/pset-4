const readlineSync = require("readline-sync");

let integer = 0;
let x = 1;
let y = 0;
let result = "";

console.log("");

do {
      integer = Number(readlineSync.question("Positive integer: "));
} while (integer <= 0 || integer > Number.MAX_SAFE_INTEGER || Number.isNaN(integer) || !Number.isInteger(integer));

while (x <= Math.floor(Math.sqrt(integer))) {

    if (x <= integer) {
      y = integer % x

      if (x === Math.floor(Math.sqrt(integer))) {
        result = result + x + ". "
        break;
      } else if (y === 0) {
        result = result + x + ", " + (integer / x) + ", "
      }
      x++
    }
}

  console.log("\n" + result + "\n")
