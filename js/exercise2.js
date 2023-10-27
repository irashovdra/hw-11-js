const numbers = [12, 4, 23, 48, 27, 56, 6, 39, 8, 65];
let biggestnumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (biggestnumber < numbers[i]) {
    biggestnumber = numbers[i];
  }
}

console.log(biggestnumber);
