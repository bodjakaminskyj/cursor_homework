const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
const [student] = students
//********************************//
function getSubjects(){
  let studentSubjects = []
  studentSubjects = Object.keys(student.subjects)
  for (let i = 0; i < studentSubjects.length; i++) {
    studentSubjects[i] = studentSubjects[i][0].toUpperCase() + studentSubjects[i].slice(1).toLowerCase();  
  }
  
  console.log(studentSubjects)
}
/***********************************/
function getAverageMark(){
  let averageMark = [] 
  let sum = 0
  let lengths = 0
  averageMark = Object.values(student.subjects)
  for (let i = 0; i < averageMark.length; i++) {
    lengths += averageMark[i].length
    for (let j = 0; j < averageMark[i].length; j++) {
      sum += averageMark[i][j]      
  }
}
  sum = Math.round(sum/lengths*100)/100

  console.log(sum)
}
/**************************************/

getSubjects()
getAverageMark()
