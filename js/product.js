// EXERCISE 4: PRODUCT OF INTEGERS (1pt)
// Write a product() function that calculates and returns the product n1∗(n1+1)∗...∗n2(1≤n1≤ n2) of the integers between n1 and n2 inclusive.
function product(a, b) {
  let product = 1;
  for (let i = a; i <= b; i++) {
    product *= i;
  }
  return product;
}