"use strict";
function pivotIndex(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);
    return nums.findIndex((el, index, arr) => {
        leftSum += el;
        rightSum -= el;
        return (leftSum - el === rightSum);
    });
}
;
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
