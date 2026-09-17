let student = {
    name: "Prasanth",
    age: 20,
    rollno: 25,
    isPresent: true,
    city: "Chennai",
    phone: null,
    marks: [90, 85, [78, 88, [95, 99]]],
    family: {
        fName: "Deva",
        mName: "vennila"
    },
    studentData: function data() {
        console.log("Student Personal Data");
    }
}
student.studentData();
console.log(student.name);
console.log(student.age);
console.log(student.rollno);
console.log(student.isPresent);
console.log(student.city);
console.log(student.phone);
console.log(student.marks);
console.log(student.family);
console.log(student.family.fName);
console.log(student.family.mName);
console.log(student.marks[0]);
console.log(student.marks[2][0]);
console.log(student.marks[2][2][1]);