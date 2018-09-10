// Write a function that computes the running total of a list.

function runningTotal(list) {
    return list.reduce( (total, current) => total + current);
}