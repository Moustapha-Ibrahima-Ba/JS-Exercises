function product(a, b) {
  let product = 1;
  for (let i = a; i <= b; i++) {
    product *= i;
  }
  return product;
}