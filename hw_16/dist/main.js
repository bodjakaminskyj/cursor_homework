/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hw/hw_01.js":
/*!*************************!*\
  !*** ./src/hw/hw_01.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"summ\": () => (/* binding */ summ)\n/* harmony export */ });\nconst applePrice = 15.678;\r\nconst orangePrice = 123.965;\r\nconst pearPrice = 90.2345;\r\nconst summ = applePrice + orangePrice + pearPrice;\r\nconst discount = (Math.round(Math.random()*100))/100;\r\nconst money = 500;\r\nconst maxPrice = Math.max(applePrice,orangePrice,pearPrice);\r\nconst minPrice = Math.min(applePrice,orangePrice,pearPrice);\r\nconst minRound = (Math.floor(applePrice)+Math.floor(orangePrice)+Math.floor(pearPrice));\r\nconst roundToHundreds = (Math.round(summ/100)*100);\r\n\r\nconst checkParity = minRound % 2;\r\nconst remainder = money - summ;\r\nconst averagePrice = (Math.round(summ/3*100)/100);\r\nconst discountRound = Math.round(discount*100)\r\nconst discountPrice = (Math.round((summ - summ*discount)*100)/100);\r\nconst earnings = Math.round(summ/2-summ*discount)\r\n\r\n/*\r\nconsole.log(\"Максимальна ціна \", maxPrice);\r\nconsole.log(\"Мінімальна ціна \", minPrice );\r\nconsole.log(\"Вартість всіх товарів \", summ)\r\nconsole.log(\"Округлена в меншу сторону \", minRound)\r\nconsole.log(\"Округлена до сотень \", roundToHundreds);\r\nconsole.log(`Число є ${checkParity ? 'непарним' : 'парним'}`);\r\nconsole.log(\"Решта \", remainder);\r\nconsole.log(\"Середня ціна \", averagePrice);\r\nconsole.log(\"Знижка\", discountRound,\"%\");\r\nconsole.log(\"Вартість зі знижкою\", discountPrice);\r\nconsole.log(\"Чистий прибуток \",earnings);\r\n*/\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_01.js?");

/***/ }),

/***/ "./src/hw/hw_02.js":
/*!*************************!*\
  !*** ./src/hw/hw_02.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSumm\": () => (/* binding */ getSumm)\n/* harmony export */ });\nfunction getSumm(){\r\nconsole.log('%c%s', 'font: 2.5em/1 Arial; color: orangered;', 'HW: \"Цикли і Розгалуження\"')\r\n\r\nlet userFirstInputedNumber;\r\n\r\ndo {\r\n    userFirstInputedNumber = parseInt(prompt(`Введіть число N = `));\r\n} \r\nwhile(Number.isNaN(userFirstInputedNumber));\r\n\r\nconsole.log('%c%s','font: 2.0em/1 Arial; color: blue;',`Введене число N =  ${userFirstInputedNumber}, ${typeof(userFirstInputedNumber)}`);\r\n\r\nlet userSecondInputedNumber;\r\ndo {\r\n    userSecondInputedNumber = parseInt(prompt(`Введіть число M = `));\r\n} \r\nwhile(Number.isNaN(userSecondInputedNumber));\r\n\r\nconsole.log('%c%s','font: 2.0em/1 Arial; color: gold;',`Введене число M =  ${userSecondInputedNumber}, ${typeof(userSecondInputedNumber)}`);\r\n\r\nconst skipEvenValues = confirm(\"Чи потрібно пропускати парні числа\")\r\nconst skipEvenValuesResult = skipEvenValues ? console.log('%c%s', 'font: 1.5em/1 Arial; color: olivedrab;', 'Парні числа пропускаються' ) : console.log( '%c%s', 'font: 1.5em/1 Arial; color: crimson;', 'Парні числа пропускаються')\r\n\r\n\r\nlet summ = 0;\r\n\r\nif (userFirstInputedNumber<userSecondInputedNumber){   \r\n    for(let i = userFirstInputedNumber; i <= userSecondInputedNumber; i++){\r\n        if (!(skipEvenValues && (i%2===0))){summ += i; }\r\n    }\r\n}\r\n    else {for(let i = userSecondInputedNumber; i <= userFirstInputedNumber; i++){\r\n        if (!(skipEvenValues && i%2===0)){summ += i; }\r\n    }}\r\n\r\n\r\nconsole.log('%c%s','font: 2.0em/1 Arial; color: white; background-color: black',`Сума чисел від N до M =  ${summ}`);\r\n/*document.writeln(\"Сума чисел від N до M = \",summ)*/\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_02.js?");

/***/ }),

/***/ "./src/hw/hw_03.js":
/*!*************************!*\
  !*** ./src/hw/hw_03.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countLetter\": () => (/* binding */ countLetter)\n/* harmony export */ });\nconst getMaxDigit = (userNumber) => Math.max(... Array.from(String(userNumber)).map((item)=>parseInt(item)))\r\n\r\nfunction getDegree(baseNumbers, degreeNumbers){\r\n  if(degreeNumbers > 0){\r\n  for(let i = 1; i < degreeNumbers ; i++)\r\n  {\r\n    const a = baseNumbers;\r\n    baseNumbers = baseNumbers + a;\r\n  }\r\n  }\r\n  else if(degreeNumbers === 0)\r\n  {\r\n    baseNumbers = 1\r\n  }\r\n  else\r\n  {\r\n    degreeNumbers = Math.abs(degreeNumbers) \r\n    for(let i = 1; i < degreeNumbers ; i++)\r\n  {\r\n    const a = baseNumbers;\r\n    baseNumbers = baseNumbers + a;\r\n  }\r\n  baseNumbers = 1 / baseNumbers\r\n  }\r\n  return baseNumbers;\r\n}\r\nconst getName = (userName) =>userName[0].toUpperCase() + userName.slice(1).toLowerCase();\r\n\r\n\r\nfunction getSumm(summa, tax){\r\n  const rate = 100;\r\n  return summa - (summa * tax)/rate;\r\n}\r\n\r\nconst getRandomNumber = (minNumber, maxNumber)=>Math.floor(Math.random()*(maxNumber - minNumber + 1) )+ minNumber;\r\n\r\n\r\nfunction countLetter( letter, word ){\r\n  let count = 0;\r\n  letter = letter.toLowerCase() \r\n  word = word.toLowerCase()\r\n  for(let i =0; i<word.length; i++){\r\n    if(word[i].toLowerCase()===letter.toLowerCase()) count++;\r\n  }\r\n  console.log(letter, count);\r\n}\r\n/*\r\ndocument.writeln(`Функція №1: ${getMaxDigit(25423642541)} <br>`);\r\ndocument.writeln(`Функція №2: ${getDegree(2,0)}<br>`);\r\ndocument.writeln(`Функція №3: ${getName('VlADIsLAv')}<br>`);\r\ndocument.writeln(`Функція №4: ${getSumm(1000, 19.5)}<br>`);\r\ndocument.writeln(`Функція №5: ${getRandomNumber(1, 10)}<br>`);\r\ndocument.writeln(`Функція №6: ${countLetter('A', 'ajmdsmjajmjdmdajdaamajanmjamjammnajdnmjf,cf')}<br>`);\r\n*/\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_03.js?");

/***/ }),

/***/ "./src/hw/hw_04.js":
/*!*************************!*\
  !*** ./src/hw/hw_04.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pairs\": () => (/* binding */ pairs)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\r\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\n\r\nfunction getPairs(students){\r\n  const studentsBoys = [students[0], students[1],students[4]]\r\n  const studentsGirls = [students[2], students[3], students[5]]\r\n  let studentsPairs = []\r\n  for(let i = 0; i < studentsBoys.length; i++){\r\n  studentsPairs[i] = [studentsBoys[i],studentsGirls[i]]\r\n}\r\n  \r\n  return studentsPairs\r\n  \r\n}\r\nfunction getThemes(pairs, themes){\r\n  let studentsPairsThemes = []\r\n  for(let i = 0; i < pairs.length; i++){\r\n    studentsPairsThemes[i] = [pairs[i], themes[i]]\r\n  }\r\n    \r\n    return studentsPairsThemes\r\n   \r\n}\r\nfunction getMarks(students,marks){\r\n  let studentsMarks = []\r\n  for(let i = 0; i < students.length; i++){\r\n    studentsMarks[i] = [students[i], marks[i]]\r\n  }\r\n    \r\n    return studentsMarks\r\n  \r\n}\r\n\r\nfunction getMarkStudentsThemes(studentsPairs, themes) {\r\n  const studentsMarksThemes = []\r\n  for(let i = 0; i < studentsPairs.length; i++){\r\n    let mark = Math.floor(Math.random() * 5) + 1\r\n    studentsMarksThemes[i] = [studentsPairs[i], themes[i], mark]\r\n  }\r\n    \r\n    return studentsMarksThemes\r\n  \r\n  \r\n}\r\nconst pairs = getPairs(students);\r\n//console.log(pairs);\r\n\r\nconst pairsThemes = getThemes(pairs, themes)\r\n//console.log(pairsThemes);\r\n\r\nconst markStudents = getMarks(students, marks)\r\n//console.log(markStudents)\r\n\r\nconst markStudentsThemes = getMarkStudentsThemes(pairs, themes)  \r\n//console.log(markStudentsThemes)\r\n\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_04.js?");

/***/ }),

/***/ "./src/hw/hw_05.js":
/*!*************************!*\
  !*** ./src/hw/hw_05.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomArray\": () => (/* binding */ getRandomArray)\n/* harmony export */ });\nfunction getRandomArray(len = 1, min = 1, max = 1 ){\r\n  let randomArray = []\r\n  for (let i = 0; i < len; i++) {\r\n    randomArray[i] = (Math.floor(Math.random()*(max - min + 1) )+ min)\r\n  }\r\n  return randomArray\r\n}\r\nfunction getAverage(...numbers) {\r\n  const integerNumbers = numbers.filter(number => Number.isInteger(number))\r\n  return sum = integerNumbers.reduce((accumulator, curentElrment)=> accumulator + curentElrment,0)/integerNumbers.length\r\n}\r\n\r\nfunction getMedian(...numbers){\r\n  const integerNumbers = numbers.filter(number => Number.isInteger(number))\r\n  integerNumbers.sort((firstElement, secondElement)=> firstElement - secondElement)\r\nif(integerNumbers.length % 2 === 0){\r\n  median = (integerNumbers[(integerNumbers.length/2)-1] + integerNumbers[integerNumbers.length/2])/2;\r\n} else {\r\n  median = integerNumbers[(integerNumbers.length - 1)/2];\r\n}\r\nreturn median\r\n}\r\n\r\nfunction filterEvenNumbers(...numbers){\r\n  return evenNumbers = numbers.filter(x => x % 2)\r\n}\r\n\r\nfunction countPositiveNumbers(...numbers){\r\n  positiveNumbers = numbers.filter(x => x > 0)\r\n  return positiveNumbers.length\r\n}\r\n\r\nfunction getDividedByFive(...numbers){\r\n  return evenNumbers = numbers.filter(x => x % 5 === 0)\r\n}\r\n\r\nfunction divideByThree(word, len) {\r\n  let arr = []\r\n  for (let i = 0; i < word.length; i+=len) {\r\n    arr.push(word.toLowerCase().substring(i,i+len))  \r\n  }\r\n  return arr  \r\n}\r\n/*\r\ndocument.writeln(`Функція №1: ${getRandomArray(15, 1, 100)} <br>`);\r\ndocument.writeln(`Функція №3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);\r\ndocument.writeln(`Функція №4: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);\r\ndocument.writeln(`Функція №5: ${filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);\r\ndocument.writeln(`Функція №6: ${countPositiveNumbers(6, 2, 55, -11, -78, 2, -55, 77, -57, -87, 23, 2, 56, 3, 2)} <br>`);\r\ndocument.writeln(`Функція №7: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);\r\ndocument.writeln(`Функція №9: ${divideByThree(\"Commander\",3)} <br>`);\r\n*/\r\n\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_05.js?");

/***/ }),

/***/ "./src/hw/hw_06.js":
/*!*************************!*\
  !*** ./src/hw/hw_06.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateWordLetters\": () => (/* binding */ calculateWordLetters)\n/* harmony export */ });\nconst students = [{\r\n  name: \"Tanya\",\r\n  course: 3,\r\n  subjects: {\r\n    math: [4, 4, 3, 4],\r\n    algorithms: [3, 3, 3, 4, 4, 4],\r\n    data_science: [5, 5, 3, 4]\r\n  }\r\n}, {\r\n  name: \"Victor\",\r\n  course: 4,\r\n  subjects: {\r\n    physics: [5, 5, 5, 3],\r\n    economics: [2, 3, 3, 3, 3, 5],\r\n    geometry: [5, 5, 2, 3, 5]\r\n  }\r\n}, {\r\n  name: \"Anton\",\r\n  course: 2,\r\n  subjects: {\r\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n    english: [5, 3],\r\n    cosmology: [5, 5, 5, 5]\r\n  }\r\n}];\r\n\r\nconst [,student] = students\r\n\r\nconst getSubjects = (student) =>\r\nObject.keys(student.subjects).map((el) =>\r\n(el[0].toUpperCase() + el.slice(1)).replace(\"_\", \" \")\r\n);\r\n\r\nfunction getAverageMark(student){\r\n  let averageMark = [] \r\n  let sum = 0\r\n  let lengths = 0\r\n  averageMark = Object.values(student.subjects)\r\n  for (let i = 0; i < averageMark.length; i++) {\r\n    lengths += averageMark[i].length\r\n    for (let j = 0; j < averageMark[i].length; j++) {\r\n      sum += averageMark[i][j]      \r\n  }\r\n}\r\n  return Math.round(sum/lengths*100)/100\r\n}\r\n\r\nfunction getStudentInfo(){\r\n  return {\r\n    course: student.course,\r\n    name: student.name,\r\n    averageMark: getAverageMark(student)\r\n  };\r\n}\r\n\r\nfunction getStudentName(){\r\n  const studentsName = students.filter((student) => { \r\n    return student.name ;\r\n  }).map((student) => student.name).sort();  \r\n  console.log(studentsName)\r\n}\r\n\r\nfunction getBestStudent(students) {\r\n  let bestMark = 0;\r\n  let studentName = '';\r\n\r\n  students.forEach((student) => {\r\n    const currentMark = getAverageMark(student);\r\n    if (bestMark < currentMark) {\r\n      bestMark = currentMark;\r\n      studentName = student.name;\r\n    }\r\n  });\r\n  console.log(studentName)\r\n}\r\n\r\n\r\nfunction calculateWordLetters(word) {\r\n  return word.split('').reduce((accumulator, letter) => {\r\n    const currentCount = accumulator[letter] || 0;\r\n\r\n    return {\r\n      ...accumulator,\r\n      [letter]: currentCount + 1\r\n    };\r\n  }, {});\r\n}\r\n/*\r\nconsole.log(getSubjects(student));\r\nconsole.log(getAverageMark(students[0]))\r\n\r\nconsole.log(getStudentInfo())\r\ngetStudentName()\r\ngetBestStudent(students)\r\nconsole.log(calculateWordLetters('тест'))\r\n*/\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_06.js?");

/***/ }),

/***/ "./src/hw/hw_07.js":
/*!*************************!*\
  !*** ./src/hw/hw_07.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"totalTaxes\": () => (/* binding */ totalTaxes)\n/* harmony export */ });\nconst ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };\r\nconst latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };\r\nconst litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };\r\n\r\nfunction getMyTaxes(salary) {\r\n  return this.tax * salary;\r\n}\r\n\r\n\r\nfunction getMiddleTaxes() {\r\n  \r\n  return this.tax * this.middleSalary\r\n\r\n}\r\n\r\nfunction getTotalTaxes() {\r\n    return this.tax * this.middleSalary * this.vacancies;\r\n}\r\n\r\n\r\n\r\nfunction getMySalary() {\r\n  const min = 1500;\r\n  const max = 2000;\r\n  setInterval(()=>{\r\n    mySalary = {}\r\n    mySalary.salary = Math.floor(Math.random()*(max - min) + min);\r\n    mySalary.taxes = Math.floor(this.tax *  mySalary.salary*100)/100;\r\n    mySalary.profit = mySalary.salary - mySalary.taxes\r\n    console.log(mySalary);\r\n  }, 10000);\r\n  \r\n}\r\n/*\r\nconsole.log(`Податок:`,getMyTaxes.call(latvia, 1500));\r\n\r\nconsole.log(`Середній податок:`,getMiddleTaxes.call(ukraine));\r\n\r\nconsole.log(`Загальний податок:`,getTotalTaxes.call(latvia));\r\n\r\ngetMySalary.call(latvia);\r\n*/\r\n\r\nconst totalTaxes = getTotalTaxes.call(latvia);\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_07.js?");

/***/ }),

/***/ "./src/hw/hw_08.js":
/*!*************************!*\
  !*** ./src/hw/hw_08.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ostap\": () => (/* binding */ ostap)\n/* harmony export */ });\nclass Student{\r\n  constructor(university, course, fullName, marks, isDismiss = false){\r\n    this.university = university;\r\n    this.course = course;\r\n    this.fullName = fullName;\r\n    this.marks = marks;\r\n    this.isDismiss = isDismiss;\r\n  }\r\n  \r\n  get getInfo(){\r\n    return `Студент ${this.course}-го курсу ${this.university} ${this.fullName}`\r\n  }\r\n  get getMarks(){\r\n    if(this.isDismiss === false){\r\n      return this.marks;\r\n    }else return null;\r\n\r\n  }\r\n  set setMarks(mark){\r\n    if (!this.isDismiss) {\r\n      this.marks.push(mark) \r\n    }\r\n  }\r\n  getAverageMark(){\r\n    let sum = 0\r\n    let averageMark = 0;\r\n    if(this.marks !== null){\r\n    for (let i = 0; i < this.marks.length; i++) {\r\n      sum += this.marks[i]; \r\n    }\r\n    averageMark = sum/this.marks.length\r\n    return  averageMark;\r\n    }\r\n    else return null;\r\n  }\r\n  dismiss() {\r\n    this.isDismiss = true;\r\n    console.log(`Студента відраховано`)\r\n  }\r\n\r\n  recover() {\r\n    this.isDismiss = false;\r\n    console.log(`Студента поновлено`)\r\n  }\r\n}\r\nclass BudgetStudent extends Student{\r\n  constructor(university, course, fullName, marks, isDismiss){\r\n    super(university, course, fullName, marks, isDismiss);\r\n    this.getScholarship = function getScholarship() {\r\n      if (this.getAverageMark() >= 4 && !this.isDismiss) {\r\n        console.log(`Ви отримали 1400 грн. стипендії`);\r\n      } \r\n      else{\r\n        console.log(\r\n          `Студент не отримує степендію`\r\n        );\r\n      }\r\n    \r\n       \r\n    }\r\n    \r\n    setInterval(() => this.getScholarship(), 30000);  \r\n  }\r\n  \r\n}\r\nconst ostap = new Student(\r\n  'Вищої Школи Психотерапії м.Одеса', \r\n  '1',\r\n  'Остап Родоманський Бендер',\r\n  [5, 4, 4, 5]\r\n  );\r\n\r\nconst petro = new BudgetStudent(\r\n  'Вищої Школи Психотерапії м.Одеса', \r\n  '3',\r\n  'Петро Родоманський Бендер',\r\n  [4, 4, 4, 5]\r\n)\r\n/*\r\nconsole.log(ostap.getInfo);\r\nconsole.log(ostap.getMarks)\r\nostap.setMarks = 5;\r\nconsole.log(ostap.getMarks);\r\nconsole.log(ostap.getAverageMark())\r\nostap.dismiss();\r\nconsole.log(ostap.getMarks);\r\nostap.setMarks = 5;\r\nconsole.log(ostap.getMarks);\r\nostap.recover();\r\nostap.setMarks = 5;\r\nconsole.log(ostap.getMarks);\r\n\r\nconsole.log(petro.getInfo);\r\npetro.dismiss();\r\npetro.getScholarship();\r\npetro.recover();\r\npetro.getScholarship();\r\npetro.setMarks = 5;\r\npetro.getScholarship();\r\n*/\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_08.js?");

/***/ }),

/***/ "./src/hw/hw_10.js":
/*!*************************!*\
  !*** ./src/hw/hw_10.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBlocks\": () => (/* binding */ generateBlocks)\n/* harmony export */ });\nfunction getRandomColor(){\r\n  let colorNunber = Math.round(Math.random() * (10000-100)+100);\r\n  return \"#\"+colorNunber;\r\n}\r\n\r\nfunction generateBlocks(lengthArrays){\r\n  \r\n  const space = document.querySelector(\".squareSpace\");\r\n  for (let i = 0; i < lengthArrays; i++) {\r\n    const row = document.createElement(\"div\");\r\n    row.className = \"row\";\r\n    row.style.display = \"flex\";\r\n    space.appendChild(row);\r\n    for (let j = 0; j < lengthArrays; j++) {\r\n      const square = document.createElement(\"div\");\r\n      square.className = \"square\";\r\n      square.style.cssText = \"width: 50px; height: 50px; display: inline-block\"\r\n      square.style.backgroundColor = getRandomColor()\r\n      row.appendChild(square)\r\n    }\r\n  }\r\n}\r\n\r\nfunction changeColor() {\r\n  const squares = document.querySelectorAll(\".square\");\r\n  squares.forEach(function (square) {\r\n    square.style.backgroundColor = getRandomColor();\r\n  });\r\n}\r\nfunction generateBlocksInterval(time) {\r\n  setInterval(() => changeColor(), time);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://hw_16/./src/hw/hw_10.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw_hw_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw/hw_01 */ \"./src/hw/hw_01.js\");\n/* harmony import */ var _hw_hw_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw/hw_02 */ \"./src/hw/hw_02.js\");\n/* harmony import */ var _hw_hw_03__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw/hw_03 */ \"./src/hw/hw_03.js\");\n/* harmony import */ var _hw_hw_04__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw/hw_04 */ \"./src/hw/hw_04.js\");\n/* harmony import */ var _hw_hw_05__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw/hw_05 */ \"./src/hw/hw_05.js\");\n/* harmony import */ var _hw_hw_06__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw/hw_06 */ \"./src/hw/hw_06.js\");\n/* harmony import */ var _hw_hw_07__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw/hw_07 */ \"./src/hw/hw_07.js\");\n/* harmony import */ var _hw_hw_08__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw/hw_08 */ \"./src/hw/hw_08.js\");\n/* harmony import */ var _hw_hw_10__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hw/hw_10 */ \"./src/hw/hw_10.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(_hw_hw_01__WEBPACK_IMPORTED_MODULE_0__.summ);\r\n(0,_hw_hw_02__WEBPACK_IMPORTED_MODULE_1__.getSumm)();\r\n(0,_hw_hw_03__WEBPACK_IMPORTED_MODULE_2__.countLetter)('a', 'ababahalamaha');\r\nconsole.log(_hw_hw_04__WEBPACK_IMPORTED_MODULE_3__.pairs)\r\nconsole.log((0,_hw_hw_05__WEBPACK_IMPORTED_MODULE_4__.getRandomArray)(15,1,20));\r\nconsole.log((0,_hw_hw_06__WEBPACK_IMPORTED_MODULE_5__.calculateWordLetters)('ababahalamaha'));\r\nconsole.log(`Загальний податок:`, _hw_hw_07__WEBPACK_IMPORTED_MODULE_6__.totalTaxes);\r\nconsole.log(_hw_hw_08__WEBPACK_IMPORTED_MODULE_7__.ostap.getInfo);\r\n(0,_hw_hw_10__WEBPACK_IMPORTED_MODULE_8__.generateBlocks)(5);\r\n\r\n\r\n\n\n//# sourceURL=webpack://hw_16/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;