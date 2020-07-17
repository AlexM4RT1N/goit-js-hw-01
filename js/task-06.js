"use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число:");

  input = input === null ? null : +input ;
  
  if (input !== input) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += input;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);