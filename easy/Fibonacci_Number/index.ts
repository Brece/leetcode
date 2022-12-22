// normal loop approach
function fibLoop(n: number): number | undefined {
    if(n <= 1) { return n }

    let list = [0, 1];
    for(let i = 1; i < n; i++) {
        list.push(list[i] + list[i - 1]);
    }
    return list.pop();
}

// recursion approach
function fibRec(n: number): number {
    if(n <= 1) { return n }

    return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibLoop(0), 0);
console.log(fibLoop(1), 1);
console.log(fibLoop(2), 1);
console.log(fibLoop(3), 2);
console.log(fibLoop(4), 3);
console.log(fibLoop(5), 5);
console.log(fibLoop(6), 8);

console.log(fibRec(0), 0);
console.log(fibRec(1), 1);
console.log(fibRec(2), 1);
console.log(fibRec(3), 2);
console.log(fibRec(4), 3);
console.log(fibRec(5), 5);
console.log(fibRec(6), 8);