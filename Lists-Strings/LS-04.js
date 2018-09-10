// Write a function that returns the elements on odd positions in a list.

function oddOnly(list) {
    return list.filter( (element, index) => (index % 2 !== 0));
}