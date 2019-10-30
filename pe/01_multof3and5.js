


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Understand the Problem: 
// I need to return a sum (one number)
// the only numbers that I am returning a sum for are multiples of 3 and 5
// I only need the multiples BELOW 1000

// Thoughts:
// this problem has components of fizzbuzz
// I need to figure how to be given a single number and count through it
// how do i create a counter that stops at the given number

// Plan:
// have an array that holds all the multipes, at then end we can use the reduce method to return a sum
// if the remainder of x == 3 OR 5 is 0, push it to the array
// this feels like it would require a loop

// FIRST PASS with ARRAY:


/* const multi35 = (num) => {
    // create a counter
    let count = 0
    // this array will hold the multiples of 3 or 5
    const multiples = []

    // the while loop allows us to increment our counter until we hit num
    while (count < num) {
        // before incrementing we check first:
        // if the COUNT is divisible by 3 or 5 then:
        if (count % 3 == 0 || count % 5 == 0) {
            // push the number to the array
            multiples.push(count)
        }
        // THEN increment the counter by one
        // this keeps the while loop going and allows us to check num - 1.
        count++
    }

    // we get the sum by using the reduce method.

    // first create your reducer function
    // we have the accumulator + the currentValue we are adding from the array.
    const reducer = (acc, cV) => acc + cV
    // apply reduce to the array. pass through the reducer.
    const sum = multiples.reduce(reducer)

    return sum
}
console.log(multi35(1000)) */

//SECOND PASS without an array/reducer

const multi35 = (num) => {
    // create a counter
    let count = 0
    // create an accumulator
    let sum = 0

    //as long as count is less than num...
    while (count < num) {
        // and is divisible by 3 and 5...
        if (count % 3 == 0 || count % 5 == 0) {
            // add count to sum
            sum += count
        }
        // increment count to check the next number
        count++
    }
    // when count == num, exit the loop and return the sum
    return sum
}

console.log(multi35(1000))
