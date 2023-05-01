let from = 3;
let to = 12;
for (let i = from; i <= to; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
