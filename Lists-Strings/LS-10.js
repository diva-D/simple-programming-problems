// Write a function that combines two lists by alternatingly taking elements, e.g. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3].

function combineAlt(list1, list2) {
    const newList = [];
    for (let i = 0; i < list1.length; i++) {
        newList.push(list1[i], list2[i]);
    }
    return newList;
}