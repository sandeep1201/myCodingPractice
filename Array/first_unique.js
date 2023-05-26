function firstUnique(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let i = 0;i<arr.length;i++) {
    if(obj[arr[i]] == 1) {
        return arr[i];
    }
  }
  return null;
}
console.log(firstUnique([9, 2, 3, 2, 6, 6]));
