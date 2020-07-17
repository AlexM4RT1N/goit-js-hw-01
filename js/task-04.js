"use strict";

let credits = 23580;
const pricePerDroid = 3000;

let totalPrice;

const userQuestion = prompt(`Привет, сколько дроидов тебе нужно?`) ^ 0;

if (userQuestion === null || userQuestion <= 0) {
  alert('Отменено пользователем!');
} else {
  totalPrice = userQuestion * pricePerDroid;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    credits = credits - totalPrice;
    alert(`Вы купили ${userQuestion} дроидов, на счету осталось ${credits} кредитов.`);
  }
}
