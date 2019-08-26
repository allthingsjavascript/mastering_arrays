//Use a for loop to create a new array (lStudents) that contains the same names, but convert the names to lowercase.

let students = ["Steven", "Lori", "james", "lynette", "Arianna", "McKay", "witney"],
    lStudents = [];

for (let i = 0;i < students.length;i++) {
    lStudents.push(students[i].toLowerCase());
    //lStudents[i] = students[i].toLowerCase();
};