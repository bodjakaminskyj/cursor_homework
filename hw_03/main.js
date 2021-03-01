const getMaxDigit = (userNumber) => Math.max(... Array.from(String(userNumber)).map((item)=>parseInt(item)))

function getDegree(baseNumbers, degreeNumbers){
  if(degreeNumbers > 0){
  for(let i = 1; i < degreeNumbers ; i++)
  {
    const a = baseNumbers;
    baseNumbers = baseNumbers + a;
  }
  }
  else if(degreeNumbers === 0)
  {
    baseNumbers = 1
  }
  else
  {
    degreeNumbers = Math.abs(degreeNumbers) 
    for(let i = 1; i < degreeNumbers ; i++)
  {
    const a = baseNumbers;
    baseNumbers = baseNumbers + a;
  }
  baseNumbers = 1 / baseNumbers
  }
  return baseNumbers;
}
const getName = (userName) =>userName[0].toUpperCase() + userName.slice(1).toLowerCase();


function getSumm(summa, tax){
  const rate = 100;
  return summa - (summa * tax)/rate;
}

const getRandomNumber = (minNumber, maxNumber)=>Math.floor(Math.random()*(maxNumber - minNumber + 1) )+ minNumber;


function countLetter( letter, word ){
  let count = 0;
  letter = letter.toLowerCase() 
  word = word.toLowerCase()
  for(let i =0; i<word.length; i++){
    if(word[i]===letter) count++;
  }
  return count;
}

document.writeln(`Функція №1: ${getMaxDigit(25423642541)} <br>`);
document.writeln(`Функція №2: ${getDegree(2,0)}<br>`);
document.writeln(`Функція №3: ${getName('VlADIsLAv')}<br>`);
document.writeln(`Функція №4: ${getSumm(1000, 19.5)}<br>`);
document.writeln(`Функція №5: ${getRandomNumber(1, 10)}<br>`);
document.writeln(`Функція №6: ${countLetter('A', 'ajmdsmjajmjdmdajdaamajanmjamjammnajdnmjf,cf')}<br>`);