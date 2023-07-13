// LEAP YEAR

const isLeap = number => {
  return (number % 4 === 0 && number % 400 === 0) || number % 100 !== 0;
};
