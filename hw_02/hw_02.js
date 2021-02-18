console.log('%c%s', 'font: 2.5em/1 Arial; color: orangered;', 'HW: "Цикли і Розгалуження"')
let N =Number(prompt("Введіть число N = "));
    if (N) {
    N=Math.ceil(N) 
    console.log('%c%s','font: 2.0em/1 Arial; color: blue',`Число N = ${N}`)
    }
    else N = Number(prompt("Введіть коректне число N = "));
let M = Number(prompt("Введіть число M = "));
    if (M) {   
        M=Math.floor(M) 
        console.log('%c%s','font: 2.0em/1 Arial; color: gold;',`Число M = ${M}`)
    }
    else M = Number(prompt("Введіть коректне число N = "));
const B = confirm("Чи потрібно пропускати парні числа")
if (B) console.log('%c%s','font: 1.5em/1 Arial; color: olivedrab;',"Парні числа пропускаються")
else console.log('%c%s','font: 1.5em/1 Arial; color: crimson;',"Парні числа не пропускаються")
let summ = 0;
    for(let i = N; i <= M; i++){
        if (!(B && (i+1)%2)){summ += i; }
    }
console.log('%c%s','font: 2.0em/1 Arial; color: white; background-color: black',`Сума чисел від N до M =  ${summ}`);
document.writeln("Сума чисел від N до M = ",summ)



