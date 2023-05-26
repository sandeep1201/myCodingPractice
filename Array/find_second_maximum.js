function findSecondMaximum(arr) {
    let firstMax = Number.NEGATIVE_INFINITY;
    let secondmax = Number.NEGATIVE_INFINITY;

    for(let i = 0;i<arr.length;i++) {
        if(arr[i] > firstMax) {
            secondmax = firstMax;
            firstMax = arr[i];
        } else if(arr[i] > secondmax && arr[i] !=firstMax) {
            secondmax = arr[i];
        } 
    } 
    return secondmax;
}

console.log(findSecondMaximum([4,5,7,7]));