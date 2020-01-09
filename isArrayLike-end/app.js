
const isArrayLike = (coll) => coll != null && typeof coll[Symbol.iterator] === 'function';


let domDiv = document.querySelectorAll('div');

let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};

let str = "string";

/*for (let v of obj) {
    console.log(v);
}*/

console.log(isArrayLike(str));