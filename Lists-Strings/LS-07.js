// Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)

function sumFor(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}


function sumWhile(list) {
    let total = 0;
    let i = 0;
    while (i < list.length) {
        total += list[i];
        i++;
    }
    return total;
}

function sumRecursion(list) {
    if (list.length === 0) { return 0; }
    return list[0] + sumRecursion(list.slice(1, list.length));  // Cuts list down until no more elements
}