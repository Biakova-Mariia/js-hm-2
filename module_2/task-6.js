'use strict';

let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите чило');

  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
} while (input !== null);
for (let i = 0; i < numbers.length; i++) {
  total += Number(numbers[i]);
}
console.log(`Общая сумма чисел равна ${total}`);
