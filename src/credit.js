const readlineSync = require("readline-sync");

let credit = 0;
let value = 0;
let value1 = 0;
let sum = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
let digit = 0;

console.log()

do {
    credit = Number(readlineSync.question("Number: "))
} while (credit < 100000000000 || credit > 9999999999999999 || Number.isNaN(credit) || !Number.isInteger(credit))

let credit2 = credit;
let credit3 = credit;

while (credit2 > 0) {
    if (credit2 > 0) {
       value = Math.floor((credit2 % 100) / 10);
       credit2 = Math.floor(credit2 / 100);
       value4 = value * 2;
       digit++
       if (value4 < 10) {
         sum = sum + value4
       }

       if (value4 >= 10) {
         value1 = value4 / 10;
         value2 = Math.floor(value1);
         value3 = value4 % 10;
         sum = sum + value2 + value3;
       }
    }
}

while (credit3 > 0) {
    if (credit3 === credit) {
      value5 = (credit3 % 10);
      credit3 = Math.floor((credit3 / 10));
      sum = sum + value5
      continue;
    }

    if (credit3 !== credit) {
      value6 = Math.floor((credit3 % 100) / 10);
      credit3 = Math.floor((credit3 / 100))
      sum = sum + value6
      digit++
    }
}

if (sum % 10 !== 0) {
    console.log("\nInvalid.\n")
}

while (credit > 0) {
    if (digit === 15 && (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 34 || (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 37) {
      console.log("\nAmex.\n")
      break;
    }

    if ((digit === 16) && (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 51 || (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 52 || (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 53 || (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 54 || (Math.floor(credit / (Math.pow(10, (digit - 2))))) === 55) {
      console.log("\nMastercard.\n")
      break;
    }

    if ((Math.floor(credit / (Math.pow(10, (digit - 1))))) === 4 && (digit === 13 || digit === 16)) {
      console.log("\nVisa.\n")
      break;
    }

    if (digit === 15 || digit === 16 || digit === 13 || credit / (Math.pow(10, (digit - 1)) === 4 || credit / (Math.pow(10, (digit - 2)) === 51 || credit / (Math.pow(10, (digit - 2))) === 52 || credit / (Math.pow(10, (digit - 2))) === 53 || credit / (Math.pow(10, (digit - 2))) === 54 || credit / (Math.pow(10, (digit - 2))) === 55) || credit / (Math.pow(10, (digit - 2)) === 34 || credit / (Math.pow(10, (digit - 2))) === 37))) {
      console.log("\nInvalid.\n")
      break;
    }
}
