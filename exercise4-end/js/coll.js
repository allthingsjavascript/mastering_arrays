let methods = ["map", "filter", "reduce", "reduceRight", "forEach", "every", "some"],
    divs = document.querySelectorAll('div'),
    nums = new Set([1, 2, 3, 4, 5]),
    all = new Map();

all.set(methods, "first");
all.set(divs, "second");
all.set(nums, "third");
all.set(all, "fourth");

let allArray = processData(methods, divs, nums, all);

console.log(allArray);