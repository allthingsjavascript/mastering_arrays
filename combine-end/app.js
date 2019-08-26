let array1 = [5, 10, 15, 20, 25],
    array2 = [2, 4, 6, 8, 10, 12],
    array3 = ["abc", "def", "ghi", "jkl"];

let newArray = [...array1, ...array2, ...array3, 1, 3, 5, 7];

//let newArray = array2.concat(array1, array3, [1, 3, 5, 7]);