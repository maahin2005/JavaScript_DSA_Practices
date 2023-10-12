// class and objects Practice

class ExamForm {
  fill(name, number) {
    this.studentName = name;
    this.studentNumber = number;
  }

  submit() {
    console.log(
      "Form Submitted of " +
        this.studentName +
        ", Roll Number is " +
        this.studentNumber
    );
  }
  cancel() {
    console.log(
      "Form cancel of " +
        this.studentName +
        ", Roll Number is " +
        this.studentNumber
    );
  }
}

let student1 = new ExamForm();
student1.fill("shreya", 10);
student1.submit();
let student2 = new ExamForm();
student1.fill("harsh", 11);
student1.submit();
student1.cancel();
