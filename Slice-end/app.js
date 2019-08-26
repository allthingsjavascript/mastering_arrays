let array1 = [5, 10, 15, 20, 25, 30, 35, 40];

let newArray = array1.slice(0,5);

let newArray2 = array1.slice(2);

let newArray3 = array1.slice();

let test = function() {
    console.log(arguments);

    let argArray = Array.prototype.slice.call(arguments);
    console.log(Array.isArray(argArray));
};

test(1,2,3);