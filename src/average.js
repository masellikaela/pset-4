const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;

console.log()
let nonNegativeInteger = 0

do {
  Number(readlineSync.question("Non-negative integer: "));
}
while (nonNegativeInteger !==0 || Number.isNaN(nonNegativeInteger) ||  !Number.isInteger(nonNegativeInteger) || nonNegativeInteger < MIN || nonNegativeInteger > MAX){
    if (nonNegativeInteger === -1){
      nonNegativeInteger += nonNegativeInteger
    }
}
