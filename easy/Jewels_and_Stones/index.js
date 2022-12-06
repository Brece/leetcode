"use strict";
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
    /* 1
    let result = 0;

    for(let c of stones) {
        if(jewels.indexOf(c) !== -1) {
            result++;
        }
    }
    */
    // 3
    let result = 0;
    const set = new Set(jewels);
    for (let c of stones) {
        if (set.has(c)) {
            result++;
        }
    }
    return result;
    /* 2
    return jewels.split("").reduce( (acc, value) => acc + stones.split(value).length-1 , 0)
    */
}
console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
console.log(numJewelsInStones("z", "ZZ"), 0);
