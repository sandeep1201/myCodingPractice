//leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    let sum = 0;
    while (start <= end) {
        sum = numbers[start] + numbers[end];
        if (sum == target) {
            break;
        } else if (sum > target) {
            end--;
        } else {
            start++;
        }
    }
    return [start + 1, end + 1];
};