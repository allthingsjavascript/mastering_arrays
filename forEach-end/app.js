
let arr = [3, 15, 25, 6, 8, 12],
    total = 0;

/*for (let val of arr) {
    total += val;
};*/

/*arr.forEach(function(val) {
    total += val;
});

console.log(total);*/

arr.forEach(function(val, idx, theArray) {
    theArray[idx] = val * val;
});

let objArr = [{
    firstName: "Steven",
    lastName: "Hancock",
    score: 90,
    pass: null
},{
    firstName: "Lynette",
    lastName: "Jorgensen",
    score: 100,
    pass: null
},{
    firstName: "Andrew",
    lastName: "Wilson",
    score: 69,
    pass: null
},{
    firstName: "Annika",
    lastName: "Turner",
    score: 82,
    pass: null
}];

objArr.forEach(function(val) {
    (val.score < 70) ? val.pass = false : val.pass = true;
});

