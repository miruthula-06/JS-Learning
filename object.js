let student = {
  name:"miruthula",
  rollno:72,
  isPresent:true,
  Address:undefined,
  phoneno:null,
  marks:[97,86,[82,84,[98,99]]],
  temp:{
    fName:"deva",
    mName:"vennila"
       },
  temp1:function data(){
    console.log("Student Personal Data")
  }
}
student.temp1()
console.log(student)
console.log(student.name)
console.log(student.rollno)
console.log(student.isPresent)
console.log(student.Address)
console.log(student.phoneno)
console.log(student.marks)
console.log(student.temp)
console.log(student.temp1())
console.log(student.temp.fName);
console.log(student.temp.mName);
console.log(student.marks[0])
console.log(student.marks[2][2][1])