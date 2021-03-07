function getRandomArray(len = 1, min = 1, max = 1 ){
  let randomArray = []
  for (let i = 0; i < len; i++) {
    randomArray[i] = (Math.floor(Math.random()*(max - min + 1) )+ min)
  }
  return randomArray
}
function getAverage(...numbers) {
  const integerNumbers = numbers.filter(number => Number.isInteger(number))
  return sum = integerNumbers.reduce((accumulator, curentElrment)=> accumulator + curentElrment,0)/integerNumbers.length
}

function getMedian(...numbers){
  const integerNumbers = numbers.filter(number => Number.isInteger(number))
  integerNumbers.sort((firstElement, secondElement)=> firstElement - secondElement)
if(integerNumbers.length % 2 === 0){
  median = (integerNumbers[(integerNumbers.length/2)-1] + integerNumbers[integerNumbers.length/2])/2;
} else {
  median = integerNumbers[(integerNumbers.length - 1)/2];
}
return median
}

function filterEvenNumbers(...numbers){
  return evenNumbers = numbers.filter(x => x % 2)
}

function countPositiveNumbers(...numbers){
  positiveNumbers = numbers.filter(x => x > 0)
  return positiveNumbers.length
}

function getDividedByFive(...numbers){
  return evenNumbers = numbers.filter(x => x % 5 === 0)
}

function divideByThree(word, len) {
  let arr = []
  for (let i = 0; i < word.length; i+=len) {
    arr.push(word.toLowerCase().substring(i,i+len))  
  }
  return arr  
}

document.writeln(`Функція №1: ${getRandomArray(15, 1, 100)} <br>`);
document.writeln(`Функція №3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);
document.writeln(`Функція №4: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);
document.writeln(`Функція №5: ${filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);
document.writeln(`Функція №6: ${countPositiveNumbers(6, 2, 55, -11, -78, 2, -55, 77, -57, -87, 23, 2, 56, 3, 2)} <br>`);
document.writeln(`Функція №7: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);
document.writeln(`Функція №9: ${divideByThree("Commander",3)} <br>`);


