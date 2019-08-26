let arr = [1, 2, 3];

let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};

/*for (let val of obj) {
    console.log(val);
};*/

//iterable

let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

/*for (let val of map) {
    console.log(val);
};*/

let divs = document.querySelectorAll('div');

for (let val of divs) {
    console.log(val);
};

