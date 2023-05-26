function findProduct(arr) {
  let product = [];
  let temp = 1;
  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i];
  }
  temp = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }
  return product;
}
console.log(findProduct([5, 6, 7, 8]));
