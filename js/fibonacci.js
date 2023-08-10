function fibonacci(n) {
  //   We already know the values when n = 0 and n = 1;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    // We will get into this loop only when n >= 2
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
