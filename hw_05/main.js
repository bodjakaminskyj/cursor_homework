function getRandomArray(len = 1, min = 1, max = 1 ){
  let randomArray = []
  for (let i = 0; i < len; i++) {
    randomArray[i] = (Math.floor(Math.random()*(max - min + 1) )+ min)
  }
  return randomArray
}
/*
function getModa(...numbers){

}
*/

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum)

function getAverage(...numbers){
  numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
}
/*
getMedian(...numbers){

}

*/
function filterEvenNumbers(...numbers){
  return evenNumbers = numbers.filter(x => x % 2)
  }


function countPositiveNumbers(...numbers){
  let count = 0
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] > 0 ? count++ : count
  }
  return count;

}

function getDividedByFive(...numbers){
  return evenNumbers = numbers.filter(x => x % 5 === 0)
}
/*
getDividedByFive(...numbers){

}

replaceBadWords(string){

}

divideByThree(word){

}

generateCombinations(word){

}

*/

document.writeln(`Функція №1: ${getRandomArray(15, 1, 100)} <br>`);
/*
document.writeln(`Функція №2: ${getRandomArray(15, 1, 100)} <br>`);
*/
document.writeln(`Функція №3: ${getAverage(28, -19, -74, 60, 89, 41, -23, 48, 8, 68, -31, -55, 54, -57, 87)} <br>`);
/*
document.writeln(`Функція №4: ${getRandomArray(15, 1, 100)} <br>`);
*/
document.writeln(`Функція №5: ${filterEvenNumbers(28, -19, -74, 60, 89, 41, -23, 48, 8, 68, -31, -55, 54, -57, 87)} <br>`);

document.writeln(`Функція №6: ${countPositiveNumbers(28, -19, -74, 60, 89, 41, -23, 48, 8, 68, -31, -55, 54, -57, 87)} <br>`);

document.writeln(`Функція №7: ${getDividedByFive(28, -19, -74, 60, 89, 41, -23, 48, 8, 68, -31, -55, 54, -57, 87)} <br>`);
/*
document.writeln(`Функція №8: ${getRandomArray(15, 1, 100)} <br>`);

document.writeln(`Функція №9: ${getRandomArray(15, 1, 100)} <br>`);

document.writeln(`Функція №10: ${getRandomArray(15, 1, 100)} <br>`);
*/
