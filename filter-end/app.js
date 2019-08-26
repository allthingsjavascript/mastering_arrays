
let scores = [80, 50, 0, 100, 90, 80, 75];

let passScores = scores.filter(function(val) {
    return val >= 70;
});

let failScores = scores.filter(function(val) {
    return val < 70;
});