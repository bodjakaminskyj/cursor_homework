class Student{
  constructor(university, course, fullName, marks){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }
  
  get getInfo(){
    return `Студент ${this.course}-го курсу ${this.university} ${this.fullName}`
  }
  get getMarks(){
    return this.marks
  }
  set setMarks(mark){
    if (this.marks !== null) {
      this.marks.push(mark) 
    }
  }
  getAverageMark(){
    let sum = 0
    let averageMark = 0;
    if(this.marks !== null){
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i]; 
    }
    averageMark = sum/this.marks.length
    return  averageMark;
    }
    else return null;
}
  dismiss() {
    this.marks = null;
  }

  recover() {
    this.marks = [];
  }
}
class BudgetStudent extends Student{
  constructor(university, course, fullName, marks){
    super(university, course, fullName, marks);
    this.getScholarship = function getScholarship() {
      if (this.getAverageMark() >= 4) {
        console.log(`Ви отримали 1400 грн. стипендії`);
      } 
      else if(this.marks === null){
        console.log(
          `Cтудента ${this.fullName} виключено, він не отримує стипендію`
        );
      }

      else{
        console.log(
          `Ваша середня оцінка нижче 4.0, ви не можете отримати стипендію`
        );
      }
    
       
    }
    
    setInterval(() => this.getScholarship(), 30000);  
  }
  
}
const ostap = new Student(
  'Вищої Школи Психотерапії м.Одеса', 
  '1',
  'Остап Родоманський Бендер',
  [5, 4, 4, 5]
  );

const petro = new BudgetStudent(
  'Вищої Школи Психотерапії м.Одеса', 
  '3',
  'Петро Родоманський Бендер',
  [4, 4, 4, 5]
)

console.log(ostap.getInfo);
console.log(ostap.getMarks)
ostap.setMarks = 5;
console.log(ostap.getMarks);
console.log(ostap.getAverageMark())
ostap.dismiss();
console.log(ostap.getMarks);
ostap.setMarks = 5;
console.log(ostap.getMarks);
ostap.recover();
ostap.setMarks = 5;
console.log(ostap.getMarks);

console.log(petro.getInfo);
petro.dismiss();
petro.getScholarship();
petro.recover();
petro.getScholarship();
petro.setMarks = 5;
petro.getScholarship();
