const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

let lowerBound = 1;
let upperBound = -1;

console.log();
while (lowerBound > upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound) || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound) || lowerBound < MIN || upperBound > MAX) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

let sum = 0;

for (let i = lowerBound; i <= upperBound; i++) {
    if (i % 2 === 0) {
      sum = (sum + i);
    }
}

console.log(`\n${sum.toLocaleString()}.\n`);
