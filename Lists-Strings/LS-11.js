// Write a function that merges two sorted lists into a new sorted list. [1, 4, 6], [2, 3, 5]→[1, 2, 3, 4, 5, 6].You can do this quicker than concatenating them followed by a sort.

function mergeSort(list1, list2) {
    let newList = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < list1.length && index2 < list2.length) {
        if (list1[index1] < list2[index2]) {
            newList.push(list1[index1]);
            index1++;
        } else {
            newList.push(list2[index2]);
            index2++;
        }
    }
    if (index1 < list1.length) {
        newList = newList.concat(list1.slice(index1));
    } else if (index2 < list2.length) {
        newList = newList.concat(list2.slice(index2));
    }
    return newList;
}

function mergeSort2(list1, list2) {
    return list1.concat(list2).sort((a,b) => a - b);
}