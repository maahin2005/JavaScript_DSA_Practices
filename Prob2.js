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
}

let student1 = new ExamForm();
student1.fill("shreya", 10);
student1.submit();
