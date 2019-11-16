/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

//[https://projecteuler.net/problem=14]
// Longest Collatz Sequence

function longestCollatzSequence() {
    let outcome = {};
    for (let n = 2; n < 999999; n++) {

        length = getSequenceLength(n, outcome);
        outcome[n] = length;
    }
    let maxLength = 0;
    let startNumber = 0;
    for (let key in outcome) {
        if (outcome[key] > maxLength) {
            maxLength = outcome[key]
            startNumber = key;
        }
    }
    return startNumber
}

function getSequenceLength(n, outcome) {
    let length = 0;
    while (n > 0) {
        // Optimize via "memoization"
        if (outcome[n]) {
            length += outcome[n];
            break;
        }
        length++;
        if (n === 1) {
            break;
        } else if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    return length
}

console.time("END");
let startingNumber = longestCollatzSequence();
console.log("Final Result", startingNumber);
console.timeEnd("END");