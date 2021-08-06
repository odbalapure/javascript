/* 
TO DO:
create array of students objects
filter objects of female students
filter names starting with `a`
count male students
*/
var students = [
    {
        name: "Om",
        age: 25,
        gender: "M",
        score: 88
    },
    {
        name: "Ankita",
        age: 24,
        gender: "F",
        score: 39
    },
    {
        name: "Nihal",
        age: 23,
        gender: "M",
        score: 68
    },
    {
        name: "Satyam",
        age: 22,
        gender: "M",
        score: 98
    },
    {
        name: "Arun",
        age: 26,
        gender: "M",
        score: 63
    },
    {
        name: "Nikita",
        age: 27,
        gender: "F",
        score: 29
    }
];

// filter objects of female students
var femaleStudents = students
    .filter(student => student["gender"] === "F")
    .map(student => student.name);
console.log(femaleStudents);

// filter names starting with `a`
var nameStartWithA = students
    .filter(student => student["name"].toLowerCase().startsWith("a"))
    .map(student => student.name);
console.log(nameStartWithA);

// count male students
var maleStudentsCount = students.filter(student => student["gender"] === "M").length;
console.log("No. of male students: " + maleStudentsCount);

// filter scores 
// >= 80 is A 
// >=60 is B
// 40 >= x <= 60 is C 
// <= 40 is F

// stores results for everyone 
const getGrades = (student) => {
    if (student["score"] >= 80) {
        return "A";
    } else if (student["score"] >= 60) {
        return "B";
    } else if (40 <= student["score"] && student["score"] <= 60) {
        return "C";
    } else if (student["score"] < 40) {
        return "F";
    }
};
var results = students.map(getGrades);
console.log("Results:", results);

// find the highest scorer  
// Approach 1: sort using marks 
const sortedMarks = students.sort(
    (student1, student2) => student1.score - student2.score
);
console.log("The topper is: " + sortedMarks[sortedMarks.length - 1].name);

// Approach 2: find max marks
var allScores = students.map(student => student.score);
var highestScore = Math.max(...allScores);
console.log("The topper is: " + students.filter(student => student.score === highestScore)[0].name);



