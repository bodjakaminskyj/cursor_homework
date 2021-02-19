console.log('%c%s', 'font: 2.5em/1 Arial; color: orangered;', 'HW: "Цикли і Розгалуження"')
let userFirstInputedNumber;
do {
    userFirstInputedNumber = parseInt(prompt(`Введіть число N = `));
} while(Number.isNaN(userFirstInputedNumber));

console.log('%c%s','font: 2.0em/1 Arial; color: blue;',`Введене число N =  ${userFirstInputedNumber}, ${typeof(userFirstInputedNumber)}`);
let userSecondInputedNumber;
do {
    userSecondInputedNumber = parseInt(prompt(`Введіть число M = `));
} while(Number.isNaN(userSecondInputedNumber));

console.log('%c%s','font: 2.0em/1 Arial; color: gold;',`Введене число M =  ${userSecondInputedNumber}, ${typeof(userSecondInputedNumber)}`);

const skipEvenValues = confirm("Чи потрібно пропускати парні числа")
if (skipEvenValues) console.log('%c%s','font: 1.5em/1 Arial; color: olivedrab;',"Парні числа пропускаються")
else console.log('%c%s','font: 1.5em/1 Arial; color: crimson;',"Парні числа не пропускаються")
let summ = 0;
if (userFirstInputedNumber<userSecondInputedNumber){   
    for(let i = userFirstInputedNumber; i <= userSecondInputedNumber; i++){
        if (!(skipEvenValues && (i+1)%2)){summ += i; }
    }
}
    else {for(let i = userSecondInputedNumber; i <= userFirstInputedNumber; i++){
        if (!(skipEvenValues && (i+1)%2)){summ += i; }
    }}


console.log('%c%s','font: 2.0em/1 Arial; color: white; background-color: black',`Сума чисел від N до M =  ${summ}`);
document.writeln("Сума чисел від N до M = ",summ)



