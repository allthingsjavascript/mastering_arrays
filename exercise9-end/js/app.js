/*
Create an Array of Arrays (multi-dimensional array) that will store a matrix for the product of even numbers up to and including 20. Here is a sample of the numbers the matrix will contain the product for. So in array[0][0] you should have 4 (2 * 2). array[0][1] and [1][0] should contain 8 (2 * 4) and so on.

   2   4   6   8   10   12   14   16   18   20
2
4      
6
8
10
12
14
16
18
20
*/

//Find out what number is in [9][9].

let table = [],
    rowNum = 2,
    colNum = 2;

for (let i = 0; i < 10; i++) {
    table[i] = [];
};

for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        table[row][col] = rowNum * colNum;
        colNum += 2;
    };
    colNum = 2;
    rowNum += 2;
};

console.log(table[9][9]);










