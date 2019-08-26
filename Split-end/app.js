
let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object oriented--and blend them as appropriate.";

let wordArray = str.split(" ", 10);
let commaArray = str.split(",");
let hyphenArray = str.split("-");
let regexArray = str.split(/[,.]|--/);