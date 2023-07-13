var firstname = "Vasanth"; //string types
console.log(firstname);
var phno = 9876543232; //numeric type
console.log(phno);
var x = false; //boolean type
console.log(x);
var list = [6, 3, 8, 6, 8]; //arrays
console.log(list);
var tuple = [1, 'Shara']; //tuples
console.log(tuple);
var tup = [1, 3, "Sara"];
tup = [];
console.log(tup);
var tupl = ["joe", "sam", "priya"];
console.log(tupl[0]);
tupl[1] = "son";
console.log(tupl[1]);
console.log(tupl);
var direction;
(function (direction) {
    direction[direction["east"] = 0] = "east";
    direction[direction["west"] = 1] = "west";
    direction[direction["north"] = 2] = "north";
    direction[direction["south"] = 3] = "south";
})(direction || (direction = {}));
console.log(direction);
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 10));
var user1 = {
    name: "Sharmatha",
    age: 22,
    email: "sara.dream@example.com"
};
console.log(user1);
var Details = /** @class */ (function () {
    function Details(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Details;
}());
var user2 = new Details("Priya", 23, "priya.evergreen@example.com");
console.log(user2);
var user3 = {
    name: "Shalu",
    age: 22,
    email: "shaluk@example.com"
};
console.log(user3);
