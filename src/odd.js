const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

let positiveInteger = 0
console.log()
while (positiveInteger<=0 || Number.isNaN(positiveInteger) ||  !Number.isInteger(positiveInteger) || positiveInteger < MIN || positiveInteger > MAX){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

let sum = 0;

while (positiveInteger > 0) {
  let digit = (positiveInteger % 10);
  positiveInteger = Math.floor(positiveInteger / 10);

  if (digit % 2 !== 0){
    sum = sum + digit
  }
}
console.log(`\n${sum}.`)
