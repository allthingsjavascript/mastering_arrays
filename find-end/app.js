let scores = ["80", 90, "55", 60, 100, 85, 95, 25, "100"];

let topScore = scores.find(function(val) {
    return val == 100
});

let users = [{name: "Steve", q1: 45, q2: 85}, {name: "Ignacio", q1: 100, q2: 100}, {name: "Alvin", q1: 95, q2: 100}, {name: "Brianna", q1: 100, q2: 85}, {name: "Andrea", q1: 75, q2: 95}];

let both = users.find(val => val.q1 == 100 && val.q2 == 100);