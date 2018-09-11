// Write a function that computes the list of the first 100 Fibonacci numbers.

function fibbi(n) {
    let count = 0;
    let total = 0;
    let num1 = 0;
    let num2 = 1;
    const fibNums = [0];

    while ( count < n ) {
        fibNums.push(`${count+1}: ${num2}`);  // Added count to specify which position the value is at
        total = num1 + num2;
        num1 = num2;
        num2 = total;
        count++;
    }
    return fibNums;
}

fibbi(100);