function mergeArrays(arr1, arr2) {
  let lengthOfArr1 = arr1.length;
  let lengthOfArr2 = arr2.length;
  let i = 0;
  let j = 0;
  let newArr = [];

  while (newArr.length < lengthOfArr1 + lengthOfArr2) {
    if (i < lengthOfArr1 && arr2[j] && arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else if (j < lengthOfArr2) {
      newArr.push(arr2[j]);
      j++;
    }
    
  }
  return newArr;
}

console.log(mergeArrays([4,4,4,4,4], []));
