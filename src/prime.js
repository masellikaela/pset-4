const readlineSync = require("readline-sync");

let integer = 0;
let space = "";
let x = 2;

console.log("");

do {
      integer = Number(readlineSync.question("Non-negative integer: "));
} while (integer < 0 || integer > Number.MAX_SAFE_INTEGER || Number.isNaN(integer) || !Number.isInteger(integer));

while (x < integer) {

    if (integer % x === 0 && x !== integer) {
        console.log("\nNot prime.\n")
        break;
    } else if (integer % x !== 0) {
        x++
    } else {
        break;
    }
}

if (x >= integer) {
  console.log("\nPrime.\n");
}
