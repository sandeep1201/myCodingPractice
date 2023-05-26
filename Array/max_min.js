function maxMin(arr) {
    let first = 0;
    let last = arr.length -1;
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        if(i%2===0) {
            newArr.push(arr[last]);
            last--;
        } else {
            newArr.push(arr[first]);
            first++;
        }
    }
  return newArr;
}

console.log(maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9]));