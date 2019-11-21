const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;

console.log()

let sum = 0;
let count = 0;
let done = false;

while (!done) {
  const value = Number(readlineSync.question("Non-negative integer: "));

  if (Number.isNaN(value)) {
    // ignore
  } else if (!Number.isInteger(value)) {
    // ignore
  } else if (!Number.isSafeInteger(value)) {
    // ignore
  } else {
    if (value < 0 && count === 0) {
      // ignore
    } else if (value < 0) {
      done = true;
    } else {
      sum = sum + value;
      count = count + 1;
    }
  }
}
let average = (sum/count).toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".")
