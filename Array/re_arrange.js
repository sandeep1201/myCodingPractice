function reArrange(arr) {
    let neg = [];
    let pos = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i]>=0) {
            pos.push(arr[i]);
        } else {
            neg.push(arr[i]);
        }
    }
  return neg.concat(pos);
}
