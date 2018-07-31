// Write a program that prints all prime numbers.

// This function accepts a 'limit' argument to only calculate up to that number

function allPrimeNumbers(limit) {
    let primeList = [];
    // loop through each number up to limit
    for (let i = 2; i < limit; i++) {
        // for each number check how many numbers between 1 - n divides evenly into it
        let divisorCount = 0;
        // if more than two numbers divide into i, this stops the loop and moves to the next number
        while (divisorCount < 2) {
            for (let j = 1; j <= i; j++) {
                if ( i % j === 0) {
                    divisorCount++;
                }
            }
        }
        // if only 2 numbers (1 and itself) divide evenly into it then add to primeList
        if (divisorCount === 2) {
            primeList.push(i);
        }
    }
    console.log(primeList);
    return primeList;
}
allPrimeNumbers(200);