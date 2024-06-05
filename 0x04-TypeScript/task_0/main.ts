interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne : Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
}

const studentTwo : Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'California'
}

const studentList : Student[] = [studentOne, studentTwo];


const body = document.querySelector('body');
const table = document.createElement('table');
const tr = document.createElement('tr');
tr.innerHTML = '<th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th>';
table.appendChild(tr);
for (let student of studentList) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${student.firstName}</td><td>${student.lastName}</td><td>${student.age}</td><td>${student.location}</td>`;
    table.appendChild(tr);
}

