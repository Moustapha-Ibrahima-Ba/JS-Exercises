// DICE ROLLING

//      Question 1
const launch2 = function () {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Dice 1: ${dice1}; Dice 2: ${dice2}`);
  return `The sum is ${dice1 + dice2}`;
};

//      Question 2
const launchN = function (numberOfDices) {
  let somme = 0;
  for (let i = 1; i <= numberOfDices; i++) {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(`dice${i} = ${dice}`); // show which dice we got
    somme += dice;
  }
  return `The total sum is ${somme}`;
};