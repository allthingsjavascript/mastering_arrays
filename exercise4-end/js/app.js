//The processData function has several data structures being passed to it. Check to see if the data is an Array. If not convert it to an array and then return an array of those arrays. You can check and see the return value in the console.

let processData = function(...coll) {
    let newArray = [];
    for (let val of coll) {
        if (Array.isArray(val)) {
            newArray.push(val);
        } else {
            newArray.push(Array.from(val));
        }
    }
    return newArray;
};
