// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

let printNumbers = () => {
    let userNumber = prompt("Enter a number");
    let sum = 0;
    for (let i = 1; i <= userNumber; i++) {
        sum += i;
    }
    return sum;
};