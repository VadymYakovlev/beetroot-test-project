//* Завдання.1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const sum = 0.1 + 0.2;
alert(sum.toFixed(1));
console.log(sum.toFixed(1));


//* Task 2 - Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const x = '1';
const y = 2;
let resultSum = Number(x) + y;
alert(resultSum);


//* Task 3 Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const memory = 1000;
const file = 820;
let resultMb = Math.floor(memory / file);
console.log(resultMb);


//* Task 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const discription = 'Можна купити';
const handover = 'Ваша здача';

let cash = '';
cash = prompt('Внесіть суму коштів');
console.log(cash);

let chocolatePrice = '';
chocolatePrice = prompt('Вартість шоколаду/шт');
console.log(chocolatePrice);

let resultOpportunity = Math.floor(cash / chocolatePrice);
alert(discription + ' ' + resultOpportunity);
console.log('Можна купити', resultOpportunity);

let balance = Math.floor(cash - chocolatePrice);
alert(handover + ' ' + balance);
console.log('Решта', balance);


//* Task 5. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let number = prompt('Enter a number');
console.log(number);
let result = 0;

while (number > 0) {
  rightmost = number % 10;
  result = result * 10 + rightmost;
  number = Math.floor(number / 10);
}
alert('Reversed number is:' + result);
console.log('Reversed number is:' + result);


// * Task 6. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let currency = prompt('Введість суму вкладу');
console.log(currency);

const monthlyRate = 5 / (100 * 12);
console.log('Місячна % ставка', monthlyRate.toFixed(5));

result = currency * (monthlyRate * 2);
console.log(result.toFixed(1));
alert('Сума нарахованих % за 2 міс/грн:' + ' ' + result.toFixed(1));
