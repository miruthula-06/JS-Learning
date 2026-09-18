let student = {
    name: "Kavin",
    age: 20,
    rollno: 25,
    isPresent: true,
    address: undefined,
    phone: null,
    marks: [90, 85, [78, 88, [95, 99]]],
    family: {
        fName: "Ravi",
        mName: "Priya"
    },
    studentData: function data() {
        console.log("Student Personal Data");
    }
}
student.studentData();
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.rollno);
console.log(student.isPresent);
console.log(student.address);
console.log(student.phone);
console.log(student.marks);
console.log(student.family);
console.log(student.family.fName);
console.log(student.family.mName);
console.log(student.marks[0]);
console.log(student.marks[2][1]);
console.log(student.marks[2][2][1]);