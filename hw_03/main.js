function getMaxDigit( userNumber){
  userNumber = String(userNumber)
  let maxDigit = 0;
  for(let i = 0; i < userNumber.length; i++)
    if (maxDigit < userNumber[i]) maxDigit = userNumber[i];
  return maxDigit;
  
}
function getDegree(baseNumbers, degreeNumbers){
  for(let i = 1; i < degreeNumbers ; i++)
  {
    const a = baseNumbers;
    baseNumbers = baseNumbers + a;
  }
  return baseNumbers;
}

function getName(userName){
  userName = String(userName);
  return userName[0].toUpperCase() + userName.slice(1).toLowerCase();;
}

function getSumm(summa, tax){
  const rate = 100;
  return summa - (summa * tax)/rate;
}

function getRandomNumber(minNumber, maxNumber){
  return Math.floor(Math.random()*(maxNumber - minNumber + 1) )+ minNumber;

}

function countLetter( letter, word ){
  let count = 0;
  for(let i =0; i<word.length; i++){
    if(word[i]===letter) count++;
  }
  return count;
}

function deleteDuplicateLetter(letter, word){

}


document.writeln(`Функція №1: ${getMaxDigit(356454357235)} <br>`);
document.writeln(`Функція №2: ${getDegree(2,5)}<br>`);
document.writeln(`Функція №3: ${getName('VlADIsLAv')}<br>`);
document.writeln(`Функція №4: ${getSumm(1000, 19.5)}<br>`);
document.writeln(`Функція №5: ${getRandomNumber(1, 10)}<br>`);
document.writeln(`Функція №6: ${countLetter('a', 'ajmdsmjajmjdmdajdaamajanmjamjammnajdnmjf,cf')}<br>`);