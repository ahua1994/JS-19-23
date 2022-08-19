//Assignment-JS-22:
//Write a JS code to display Perfect Numbers from 1 to 1000.
//A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

function perfectNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let divisors = 0;
        for (let j = i - 1; j > 0; j--) {
            if (i % j === 0) {
                divisors += j;
            }
        }
        if (divisors === i) {
            console.log(`${i} is a perfect number`);
        }
    }
}
console.log(perfectNumbers(1000));
