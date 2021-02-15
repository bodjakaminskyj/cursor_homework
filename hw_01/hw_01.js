let apple = 15.678;
let orange = 123.965;
let pear = 90.2345;
let summ = apple + orange + pear;
let discount = (Math.round(Math.random()*100))/100;

console.log("Максимальна ціна ", Math.max(apple,orange,pear));
console.log("Мінімальна ціна ", Math.min(apple,orange,pear));
console.log("Вартість всіх товарів ", summ)
console.log("Округлена в меншу сторону ", (Math.floor(apple)+Math.floor(orange)+Math.floor(pear)))
console.log("Округлена до сотень ", (Math.round(summ/100)*100));
console.log("Перевірка на парність ", (Math.floor(apple)+Math.floor(orange)+Math.floor(pear))%2==0);
console.log("Решта ", (500-summ));
console.log("Середня ціна ", (Math.round(summ/3*100)/100));
console.log("Знижка", Math.round(discount*100),"%");
console.log("Вартість зі знижкою", (Math.round((summ - summ*discount)*100)/100));
console.log("Чистий прибуток ",Math.round(summ/2-summ*discount));