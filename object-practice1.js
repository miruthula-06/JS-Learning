let student2 = {
    name: "Nithya",
    age: 22,
    studId: 105,
    isStudying: true,
    department: "IT",
    email: undefined,
    marks: null,
    skills: ["HTML", "CSS", ["JavaScript", "Java", ["Python", "SQL"]]],
    family: {
        fName: "Kumar",
        mName: "Lakshmi"
    },
    studentData: function data() {
        console.log("student Personal Data");
    }
}
student2.studentData();
console.log(student2.name);
console.log(student2.age);
console.log(student2.studId);
console.log(student2.isStudying);
console.log(student2.department);
console.log(student2.email);
console.log(student2.salary);
console.log(student2.skills);
console.log(student2.family);
console.log(student2.family.fName);
console.log(student2.family.mName);
console.log(student2.skills[0]);
console.log(student2.skills[2][0]);
console.log(student2.skills[2][2][1]);