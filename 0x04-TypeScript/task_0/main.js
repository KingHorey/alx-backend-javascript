var studentOne = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
};
var studentTwo = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'California'
};
var studentList = [studentOne, studentTwo];
var body = document.querySelector('body');
var table = document.createElement('table');
var tr = document.createElement('tr');
tr.innerHTML = '<th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th>';
table.appendChild(tr);
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var student = studentList_1[_i];
    var tr_1 = document.createElement('tr');
    tr_1.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.lastName, "</td><td>").concat(student.age, "</td><td>").concat(student.location, "</td>");
    table.appendChild(tr_1);
}
