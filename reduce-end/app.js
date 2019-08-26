
let scores = [80, 50, 0, 100, 90, 80, 75];

let sum = scores.reduce(function(acc, val) {
    return acc + val;
}, 0);

let objs = [{firstName: "Steven"}, {lastName: "Hancock"}, {score: 85}];

let obj = objs.reduce(function(acc, val) {
    return Object.assign(acc, val);
},{});