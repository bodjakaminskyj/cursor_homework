console.log('%c%s', 'font: 2.5em/1 Arial; color: orangered;', 'HW: "Цикли і Розгалуження"')
let N;
do {
    N = parseInt(prompt(`Введіть число N = `));
} while(Number.isNaN(N));

console.log('%c%s','font: 2.0em/1 Arial; color: blue;',`Введене число N =  ${N}, ${typeof(N)}`);
let M;
do {
    M = parseInt(prompt(`Введіть число M = `));
} while(Number.isNaN(M));

console.log('%c%s','font: 2.0em/1 Arial; color: gold;',`Введене число M =  ${M}, ${typeof(M)}`);

const trueOrFalse = confirm("Чи потрібно пропускати парні числа")
if (trueOrFalse) console.log('%c%s','font: 1.5em/1 Arial; color: olivedrab;',"Парні числа пропускаються")
else console.log('%c%s','font: 1.5em/1 Arial; color: crimson;',"Парні числа не пропускаються")
let summ = 0;
if (N<M){   
    for(let i = N; i <= M; i++){
        if (!(trueOrFalse && (i+1)%2)){summ += i; }
    }
}
    else {for(let i = M; i <= N; i++){
        if (!(trueOrFalse && (i+1)%2)){summ += i; }
    }}


console.log('%c%s','font: 2.0em/1 Arial; color: white; background-color: black',`Сума чисел від N до M =  ${summ}`);
document.writeln("Сума чисел від N до M = ",summ)



