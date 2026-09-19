let student = {
    name: "Dharani",
    rollno: 45,
    age: 20,
    isPresent: true,
    email: undefined,
    phone: null,
    marks: [95, 88, [76, 84, [91, 99]]],
    address: {
        city: "Salem",
        pincode: 636001
    },
    family: {
        fatherName: "Ramesh",
        motherName: "Kavitha"
    },
    studentData: function data() {
        console.log("Student Personal Data");
    }
}
student.studentData();
console.log(student);
console.log(student.name);
console.log(student.rollno);
console.log(student.age);
console.log(student.isPresent);
console.log(student.email);
console.log(student.phone);
console.log(student.marks);
console.log(student.address);
console.log(student.family);
console.log(student.address.city);
console.log(student.address.pincode);
console.log(student.family.fName);
console.log(student.family.mName);
console.log(student.marks[0]);
console.log(student.marks[2][0]);
console.log(student.marks[2][2][1]);