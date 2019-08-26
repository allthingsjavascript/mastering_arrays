
nums = new Set([1, 2, "3", 4, "5"]);

numsArray = Array.from(nums, function(val) {
    if (typeof val === 'string') {
        return Number(val);
    } else {
        return val;
    }
});