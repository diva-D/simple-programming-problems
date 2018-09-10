// Write a function on_all that applies a function to every element of a list.Use it to print the first twenty perfect squares(a natural number n is a perfect square if it can be written as n=m * m for some other natural number m. 1, 4, 9, 16, 25 are the first 5).

function printSquares(n) {
    const list = listCreator(n)
    const listSquared = on_all(list);
    listSquared.forEach( e => console.log(e) );
}

function on_all(list) {
    return list.map( element => element * element);
}

function listCreator(n) {
    let list = [];
    for (let i = 1; i <= n; i++) {
        list.push(i);
    }
    return list;
}

printSquares(20);