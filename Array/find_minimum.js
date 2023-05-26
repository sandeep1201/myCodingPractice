function findMinimum(arr) {
    let min = arr[0];
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinimum(1,1,1,1,1));