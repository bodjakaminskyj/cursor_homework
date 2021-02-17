const applePrice = 15.678;
const orangePrice = 123.965;
const pearPrice = 90.2345;
const summ = applePrice + orangePrice + pearPrice;
const discount = (Math.round(Math.random()*100))/100;
const money = 500;
const maxPrice = Math.max(applePrice,orangePrice,pearPrice);
const minPrice = Math.min(applePrice,orangePrice,pearPrice);
const minRound = (Math.floor(applePrice)+Math.floor(orangePrice)+Math.floor(pearPrice));
const roundToHundreds = (Math.round(summ/100)*100);

const checkParity = minRound % 2;
const remainder = money - summ;
const averagePrice = (Math.round(summ/3*100)/100);
const discountRound = Math.round(discount*100)
const discountPrice = (Math.round((summ - summ*discount)*100)/100);
const earnings = Math.round(summ/2-summ*discount)

console.log("Максимальна ціна ", maxPrice);
console.log("Мінімальна ціна ", minPrice );
console.log("Вартість всіх товарів ", summ)
console.log("Округлена в меншу сторону ", minRound)
console.log("Округлена до сотень ", roundToHundreds);
console.log(`Число є ${checkParity ? 'непарним' : 'парним'}`);
console.log("Решта ", remainder);
console.log("Середня ціна ", averagePrice);
console.log("Знижка", discountRound,"%");
console.log("Вартість зі знижкою", discountPrice);
console.log("Чистий прибуток ",earnings);