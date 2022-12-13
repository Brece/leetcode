// hash map approach
function majorityElementHash(nums: number[]): number | string {
    let map: { [key: number]: number } = {};

    for(let i = 0, n = nums.length; i < n; i++) {
        let num = nums[i];
        map[num] ? map[num] += 1 : map[num] = 1;
        if(map[num] > n / 2) { return num }
    }
    return 'There is no majority element.';
}

// sort approach
function majorityElementSort(nums: number[]): number {
    return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
}

console.log(majorityElementHash([3,2,3]), 3);
console.log(majorityElementHash([2,2,1,1,1,2,2]), 2);

console.log(majorityElementSort([3,2,3]), 3);
console.log(majorityElementSort([2,2,1,1,1,2,2]), 2);
