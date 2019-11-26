const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;

let positiveInteger= -1

console.log();
while (positiveInteger<0 || Number.isNaN(positiveInteger) ||  !Number.isInteger(positiveInteger) || positiveInteger < MIN || positiveInteger > MAX) {
   positiveInteger = Number(readlineSync.question("Positive integer: "));
}

let str = "";

while (positiveInteger > 0) {
  let digit = (positiveInteger % 10);
  positiveInteger = Math.floor(positiveInteger / 10);

  if (positiveInteger > 0) {
    str = str + digit + ", ";
  } else {
    str = str + digit + ".";
  }
}

console.log("\n" + str + "\n");
