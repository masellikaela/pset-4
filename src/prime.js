const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;

let nonNegativeInteger = Number(readlineSync.question("\nNon-negative integer: "));

while (nonNegativeInteger<0){
let nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
}
