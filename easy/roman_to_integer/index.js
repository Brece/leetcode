/**
 *  source: https://leetcode.com/problems/roman-to-integer/
 * 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
 */

const romanToInt = (s) => {
    // constraint 1
    if (s.length === 0 || s.length > 15) {
        return console.log('invalid string length');;
    }

    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    const subtractAdd = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };

    const validChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const subtractChars = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    let result = 0;

    // constraint 2
    if (s.includes('IIII')) {
        return console.log('Invalid sequence for number 4');
    }

    const inputArray = [...s];

    for (let i = 0; i < inputArray.length; i++) {
        if (!validChars.includes(inputArray[i])) {
            return console.log('invalid character');
        }

        if (i < inputArray.length - 1) {
            let charPair = inputArray[i] + inputArray[i + 1];

            if (subtractChars.includes(charPair)) {
                result += subtractAdd[charPair];
                i++;
            } else {
                result += values[inputArray[i]];
            }
        } else {
            result += values[inputArray[i]];
        }
    }

    return result;
    
    // constraint 3
    // check if result is in range between [1, 3999]
}


const case1 = 'III'; // 3
const case2 = 'LVIII'; // 58
const case3 = 'MCMXCIV'; // 1994

romanToInt(case3);
