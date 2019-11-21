const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;

console.log()

let done = false;
let value = 0

while (!done) {
  const value = Number(readlineSync.question("Non-negative integer: "));

  if (Number.isNaN(value)) {
    // ignore
  } else if (!Number.isInteger(value)) {
    // ignore
  } else if (!Number.isSafeInteger(value)) {
    // ignore
  } else {
       for (let i = 2; i <= Math.sqrt(input); i++) {
         if (input % i == 0) {

    if () {

    } else {
      console.log("Not prime.")

    }

  }
