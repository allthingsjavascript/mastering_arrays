//Make a sorted version of the growthRate array. Make sure to clone it first, so that you can maintain the order of the original data. Sort so the lowest number comes first. Try using chaining with this exercise.

let growthRate = [1.1, 0.5, -0.1, 0.3, 1.2, 1.5, 2.1, 0.8, 1.5, 0.3, -0.4];

/*let growthRateSort = [...growthRate].sort(function(a, b) {
    return a - b;
});*/

let growthRateSort = [...growthRate].sort((a, b) => a-b);


//Make a clone of the months array, then sort it and extract all the months that start with 'J' into a subarray. Try using chaining with this exercise.

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*let jMonths = [...months].sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
}).splice(4, 3);*/

let jMonths = [...months].sort((a, b) => (a.toLowerCase() < b.toLowerCase()) ? -1 : (a.toLowerCase() > b.toLowerCase()) ? 1 : 0).splice(4, 3);


