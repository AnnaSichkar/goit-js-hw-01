let credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt('Укажите количество дроидов');
userInput = Number(userInput);
const payment = pricePerDroid * userInput;

if (userInput === null) {
    console.log('Отменено пользователем!');
} else {
   console.log(`Общая стоимость заказа ${payment}. Проверяем количество доступных средств на счету`); 
}

if (credits < payment) {
    console.log('Недостаточно средств на счету!')
} else {
    credits = credits - payment;
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
}