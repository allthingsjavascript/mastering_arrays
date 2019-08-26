
let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object oriented--and blend them as appropriate.";

let str2 = "";

for (let val of str) {
    if (val === 'j') {
        str2 += val.toUpperCase();
    } else {
        str2 += val;
    }
};

let str3 = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
        str3 += str[i].toUpperCase();
    } else {
        str3 += str[i];
    }
};