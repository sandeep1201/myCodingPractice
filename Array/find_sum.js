function findSum(arr,val) {
    arr.sort((a,b) => { return a-b});

    //sliding window.
    let i =0;
    let j = arr.length -1;
    console.log(arr);
    while(i != j) {
        if(arr[i]+arr[j] === val) {
            return [arr[i],arr[j]]; 
        } 
        
        if(arr[i] + arr[j] > val) {
            j--;
        } else if (arr[i] + arr[j] <val) {
          i++;
        }
    }
    return false;
}
console.log(findSum([3, 7, 1, 2, 8, 4, 5], 10));