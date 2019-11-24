const readlineSync = require("readline-sync");

let fibonacciNumber = 0;
let x = 0;

console.log("");

do {
      fibonacciNumber = Number(readlineSync.question("Positive integer: "));
} while (fibonacciNumber < 1 || fibonacciNumber > 78 || Number.isNaN(fibonacciNumber) || !Number.isInteger(fibonacciNumber));

x = (Math.pow(1.618034, fibonacciNumber) - (Math.pow(-0.618034, fibonacciNumber))) / Math.sqrt(5)

if ((x * 10) % 10 < 5) {
  Math.floor(x)
}

if ((x * 10) % 10 >= 5) {
  Math.ceil(x)
}

result = x.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})

console.log("\n" + result + ".");
