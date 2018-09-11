// Write a function that takes a number and returns a list of its digits.

function numToList(num) {
    return num.toString().split('').map(e => Number(e));
}