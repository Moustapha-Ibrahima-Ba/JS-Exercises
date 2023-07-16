function sequenceOfSquares(number) {
  let array = "";
  for (let i = 0; i <= number; i++) {
    const square = i * i;
    array += square;
    if (i !== number) {
      array += " - ";
    }
  }
  console.log(array);
}
