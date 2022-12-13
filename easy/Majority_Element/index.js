"use strict";
function majorityElement(nums) {
    let map = {};
    for (let i = 0, n = nums.length; i < n; i++) {
        let num = nums[i];
        map[num] ? map[num] += 1 : map[num] = 1;
        if (map[num] > n / 2) {
            return num;
        }
    }
    return 'There is no majority element.';
}
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
