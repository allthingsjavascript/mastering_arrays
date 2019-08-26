/*
Below are two arrays of strings. Split each string so that individual words are elements in an array. Make sure to flatten each array, and then combine them into a single array with strArray1 coming first. Once that is done, convert the array to a string and display the resulting sentence.
*/

let strArray1 = ["Arrays are important", "data structures for any", "language"],
    strArray2 = ["and", "should be mastered", "in", "JavaScript."];

let str = [...strArray1.flatMap(val => val.split(" ")), ...strArray2.flatMap(val => val.split(" "))].join(' ');

console.log(str);