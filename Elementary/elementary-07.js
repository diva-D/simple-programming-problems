// Write a program that prints a multiplication table for numbers up to 12.

/* Example for number = 3
[
    [ , 1, 2, 3],
    [1, 1, 2, 3],
    [2, 2, 4, 6],
    [3, 3, 6, 9]
]
*/

let multiplicationTable = number => {
    let tableArray = [];               // array to hold arrays for each table row. first array has blank string for spacing
    // i = first sub-array index (the top row of the table)
    // j = subsequent sub-arrays index (the first column)
    tableArray.push(firstRow(number));
    firstColumn(tableArray, number);
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            tableArray[j].push(i * j);
        }
    }
    console.table(tableArray);          // console.table presents data in an automatic table, without having to worry about spacing
};

multiplicationTable(12);

// function to create first row
function firstRow(number) {
    let arr = [];
    for (let i = 0; i <= number; i++) {
        if (i === 0) {
            arr.push("HEADERS");
        } else {
            arr.push(i);
        }
    }
    return arr;
}

// function to create sub-arrays with first index
function firstColumn(tableArray, number) {
    for (let i = 1; i <= number; i++) {
        tableArray.push([i]);
    }
}