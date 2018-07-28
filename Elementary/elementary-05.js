// Modify the previous program such that only multiples of three or five are considered in the sum, e.g.3, 5, 6, 9, 10, 12, 15
// for n = 17

let printNumbers = () => {
    let userNumber = prompt("Enter a number");
    let sum = 0;
    for (let i = 1; i <= userNumber; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};