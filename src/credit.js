const readlineSync = require("readline-sync");

let MIN = 100000000000
let MAX = 9999999999999999
let creditCard = 0;
let algorithm = 0;
let value = 0;
let firstValue = 0;
let secondValue = 0;
let thirdValue = 0;
let fourthValue = 0;

console.log()

do {
    creditCard = Number(readlineSync.question("Number: "))
} while (creditCard < MIN || creditCard > MAX || Number.isNaN(creditCard) || !Number.isInteger(creditCard))

let sum = 0

while (creditCard > 0) {

    if (creditCard > 0) {
       value = Math.floor((creditCard % 100) / 10);
       creditCard = Math.floor(creditCard / 100);
       fourthValue = value * 2;

       if (fourthValue < 10) {
         console.log(fourthValue);
         sum = sum + fourthValue
       }

       if (fourthValue >= 10) {
         console.log(fourthValue);
         firstValue = fourthValue / 10;
         secondValue = Math.floor(firstValue);
         thirdValue = fourthValue % 10;
         sum = sum + secondValue + thirdValue;
         console.log(secondValue);
         console.log(thirdValue);
       }
    }
}
console.log("\n" + sum);
