let students = ["Steven", "Lynette", "Kaylie", "LJ", "Joshua", "Sarah", "Emily"],
    scores = [80, 90, 55, 60, 85, 95, 25, 100];

let numLoc = scores.lastIndexOf(5);
let strLoc = students.indexOf("Steven");

if (scores.includes(100)) {
    console.log("This array contains 100.")
};