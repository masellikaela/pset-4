const readlineSync = require("readline-sync");

let number = 1
let multiply = false
let MIN = 1000000000000;
let MAX = 9999999999999999;

while (number < MIN || number > MAX || Number.isNaN(number) || !Number.isInteger(number)) {
  number = Number(readlineSync.question("Number: "));
}

let sum = 0;
let numberString = String(number);
for (let i = numberString.length - 2; i >= 0; i -= 2) {
  let multiplyTwo = String(Number(numberString[i]) * 2);
  for (let j = 0; j < multiplyTwo.length; j++) {
    sum += Number(multiplyTwo[i]);
  }
}

for (let i = numberString.length - 1; i >= 0; i -= 2) {
  sum += Number(numberString[i]);
}

if (sum % 10 == 0) {
  if (numberString.length == 16) {
    //do a thing
  }
}
