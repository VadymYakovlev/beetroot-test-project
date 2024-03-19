// * Task 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let age = prompt('Enter your age');

let message = (age >= 0 && age <= 11) ? 'дитина':
(age >= 12 && age <= 17) ? 'підліток':
(age >= 18 && age <= 59) ? 'дорослий':
(age >= 60 && age <= 100) ? 'пенсіонер ':
'Введіть коректно Ваш вік';
alert(message );


// * Task 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let userInput = prompt('Enter any number from 0 to 9');
switch (userInput) {
  case '1': {
    alert('1 !');
    break;
  }
  case '2': {
    alert('2 @');
    break;
  }
  case '3': {
    alert('3 #');
    break;
  }
  case '4': {
    alert('4 $');
    break;
  }
  case '5': {
    alert('5 %');
    break;
  }
  case '6': {
    alert('6 ^');
    break;
  }
  case '7': {
    alert('7 &');
    break;
  }
  case '8': {
    alert('8 *');
    break;
  }
  case '9': {
    alert('9 (');
    break;
  }
  case '0': {
    alert('0 )');
    break;
  }
  default: {
    alert('Enter valid number');
  }
}

// * Task 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function sumInRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

let start = parseInt(prompt('Введіть початкове число:'));
let end = parseInt(prompt('Введіть кінцеве число:'));
let result = sumInRange(start, end);

alert("Сума чисел в діапазоні: " + result);
console.log('Сума чисел в діапазоні від ' + result);


// * Task 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
function findGCD(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let num1 = prompt('');
let num2 = prompt('');
let gcd = findGCD(num1, num2);
console.log('НСД чисел ' + gcd);


// * Task 5. Запитай у користувача число і виведи всі дільники цього числа.
let n = prompt('Введіть число');
let divisors = findDivisors(n);

function findDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
console.log('Дільники числа n' + '  ' + divisors);


// * Normal
//  * Task 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
function pal() {
  let result = prompt("Введіть п’ятирозрядне число ");
  let string = result.split("").reverse().join("");

  if (result === string) {
      console.log("Це є паліндромом");
  } else {
      console.log("Це не є паліндромом");
  }
}
pal();


//  * Task 2.
// * Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.
let number = prompt('Вкажіть суму:');

if (!isNaN(number)) {
  number = parseFloat(number);
  let discount = 0;

  if (number >= 200 && number <= 300) {
    discount = number * 0.03;
  }

  if (number >= 300 && number <= 500) {
    discount = number * 0.05;
  }
  if (number >= 500) {
    discount = number * 0.07;
  }

  let total = number - discount;
  console.log(`Сума зі знижкою: ${total.toFixed(2)}`);
} else {
  console.log('Введіть, будь ласка, число');
}


// * Task 3.
// * Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let positiveNumber = 0, negativeNumber = 0, zeroNumber = 0, evenNumber = 0, oddNumber = 0;

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Введіть число:"));

    if (number > 0) {
        positiveNumber++;
    } else if (number < 0) {
        negativeNumber++;
    } else {
        zeroNumber++;
    }

    if (number % 2 === 0 && number != 0) {
        evenNumber++;
    } else if (number % 2 != 0) {
        oddNumber++;
    }
}

console.log("Кількість додатних чисел:", positiveNumber);
console.log("Кількість від'ємних чисел:", negativeNumber);
console.log("Кількість нулів:", zeroNumber);
console.log("Кількість парних чисел (крім нуля):", evenNumber);
console.log("Кількість непарних чисел:", oddNumber);


// * Task 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

for (let i = 0; i < daysOfWeek.length; i++) {
    alert(daysOfWeek[i]);
    console.log(daysOfWeek[i]);
}

// * Max
// * Task 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
let min = 0;
let max = 200;
let guess;

const num = parseInt(prompt('Задагай число від 0 до 200'));

while (true) {
  guess = Math.floor((min + max) / 2); 

  let userInput = prompt(`Ваше число: > ${guess}, < ${guess} чи === ${guess}?`);

  if (userInput === '>') {
    min = guess + 1;
  } else if (userInput === '<') {
    max = guess - 1;
  } else if (userInput === '==') {
    alert(`Вітаю! Ви вгадали число: ${guess}`);
    break;
  } else {
    alert('Введено некоректне значення. Повторіть спробу.');
  }
  if (min > max) {
    alert('Відповідь некоректна. Спробуйте ще раз');
    break;
  }
}


// * Task 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
for (let i = 1; i <= 10; i++) {
  let multiply_2 = i * 2, multiply_3 = i * 3, multiply_4 = i * 4, multiply_5 = i * 5, multiply_6 = i * 6, multiply_7 = i * 7, multiply_8 = i * 8, multiply_9 = i * 9;
  console.log(`2 * ${i} = ${multiply_2}`);
  console.log(`3 * ${i} = ${multiply_3}`);
  console.log(`4 * ${i} = ${multiply_4}`);
  console.log(`5 * ${i} = ${multiply_5}`);
  console.log(`6 * ${i} = ${multiply_6}`);
  console.log(`7 * ${i} = ${multiply_7}`);
  console.log(`8 * ${i} = ${multiply_8}`);
  console.log(`9 * ${i} = ${multiply_9}`);
}
