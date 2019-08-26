
let arr = [3, 15, 25, 6, 8, 12];

let newArray = arr.map(function(val, idx, theArray) {
    console.log(val);
    console.log(idx);
    console.log(theArray);
    return val * val;
});