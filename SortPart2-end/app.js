
let arr = [{
    firstName: "Steven",
    lastName: "Hancock",
    score: 90
},{
    firstName: "Lynette",
    lastName: "Jorgensen",
    score: 100
},{
    firstName: "Andrew",
    lastName: "Wilson",
    score: 71
},{
    firstName: "Annika",
    lastName: "Turner",
    score: 82
}];

/*arr.sort(function(a, b) {
    if (a.firstName < b.firstName) return -1;
    if (b.firstName < a.firstName) return 1;
    return 0;
});*/

arr.sort(function(a, b) {
    return a.score - b.score;
});
