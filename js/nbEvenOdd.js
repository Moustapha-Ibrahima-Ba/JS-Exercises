const nbEvenOdd = function (...array) {
  let even = 0;
  let odd = 0;
  console.log(`array: ${array}`);
  const newArray = [...array];
  for (const num of newArray) {
    if (num % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(`Even: ${even}`);
  console.log(`Odd: ${odd}`);
};
