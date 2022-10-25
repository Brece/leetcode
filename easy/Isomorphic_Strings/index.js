"use strict";
function isIsomorphic(s, t) {
    if (s.length === 1 || s === t) {
        return true;
    }
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];
        if (sMap[sChar] === undefined) {
            sMap[sChar] = tChar;
        }
        if (tMap[tChar] === undefined) {
            tMap[tChar] = sChar;
        }
        if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
            return false;
        }
    }
    return true;
}
;
console.log(isIsomorphic("a", "a")); // true
console.log(isIsomorphic("ab", "ac")); // true
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
