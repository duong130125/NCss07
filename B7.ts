interface Student {
    id: number;
    name: string;
    class: string;
}

function filterStudentsByClass(students: Student[], className: string): Student[] {
    return students.filter(student => student.class === className);
}

let students: Student[] = [
    { id: 1, name: "Alice", class: "A" },
    { id: 2, name: "Bob", class: "B" },
    { id: 3, name: "Charlie", class: "A" },
    { id: 4, name: "David", class: "C" },
    { id: 5, name: "Emily", class: "B" }
];

let classAStudents = filterStudentsByClass(students, "A");
console.log("Sinh viên trong lớp A:", classAStudents);

let classBStudents = filterStudentsByClass(students, "B");
console.log("Sinh viên trong lớp B:", classBStudents);
