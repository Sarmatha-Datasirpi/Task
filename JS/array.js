var students = [
    { name: 'Sara', age: 22, place: 'tvl' },
    { name: 'Harish', age: 21, place: 'tcr' },
    { name: 'Ram', age: 22, place: 'tvl' },
    { name: 'Joe', age: 24, place: 'tcr' }
]

students.forEach(function (students) {  //foreach
    console.log(students.name);
})

var foundstudent = students.find(function (students) {   //find
    return students.age === 21;
});
console.log(foundstudent);

var foundstudent = students.filter(function (students) {   //filter
    return students.age <= 22;
});
console.log(foundstudent);

console.log(`Students are below age 22: ${foundstudent[1].place}`);  //concatenation

var names = students.map(function (students) {           //map
    return students.name;
});
console.log(names);









