
let arr = ["Steven", "Mary", "Simone", "ari", "McKay", "James"];

let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];

let compareNum = function(a, b) {
    /*if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }*/
    //return (a < b) ? 1 : (b < a) ? -1 : 0;
    return a - b;
};

let compareString = function(a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};

arr.sort(function(a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
});

arr2.sort(compareNum);