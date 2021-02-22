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
  userName = String(userName)
  let result = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  return result;
}




document.writeln(`Функція №1: ${getMaxDigit(356454357235)}`);
document.writeln(`Функція №2: ${getDegree(2,5)}`);
document.writeln(`Функція №3: ${getName('VlADIsLAv')}`);