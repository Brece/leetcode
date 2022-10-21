"use strict";
function runningSum(nums) {
    let sum = nums[0];
    return nums.map((num, index) => {
        if (!index) {
            return sum;
        }
        ;
        sum += num;
        return sum;
    });
}
