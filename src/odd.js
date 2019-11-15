const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

while (positiveInteger<=0 || Number.isNaN(positiveInteger) ||  !Number.isInteger(positiveInteger) || positiveInteger < MIN || positiveInteger > MAX){
  let positiveInteger = Number(readlineSync.question("\nPositive integer: "));
}


    }
