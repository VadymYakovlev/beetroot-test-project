import sumNum from './js/sumNum.js';
import calcS from './js/calcS.js';
import evclidNum from './js/evclidNum.js';
import { errorNumber } from './js/error.js';

// * Initailize

sumNum();
calcS();
evclidNum();
errorNumber();

const homeworksFunctions = () => {
  // * Task 1. Напиши всі можливі варіанти створення функцій.

  // Контексна функція
  function calcContext(a, b) {
    console.log(2 ** 4);
  }
  calcContext();

  // Анонімна функція
  const calcAnonym = function () {
    console.log(2 ** 4);
  };
  calcAnonym();

  // Cтрілочна функція
  const calcRow = () => {
    console.log(2 ** 4);
  };
  calcRow();

  // * Task 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

  function prodoctList() {
    console.log('К-сть аргументів', arguments.length);
  }
  prodoctList('Картопля', 'Морква', 'Цибуля', 'Буряк');

  // * Task 3. Напиши функцію, яка приймає 2 числа і повертає :
  // -1, якщо перше число менше, ніж друге;
  // 1 - якщо перше число більше, ніж друге;
  // 0 - якщо числа рівні.

  function x(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
  console.log(x(3, 4));
  console.log(x(3, 2));
  console.log(x(3, 3));

  // * Task 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

  function factorial(n) {
    if (errorNumber(n)) {
      throw new Error('Невірне значення!');
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  alert(factorial(4)); // Факторіал !4 буде 24, бо 4!=4⋅3⋅2⋅1=24
  console.log(factorial(4));

  // * Task 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

  // function sumNum(num1, num2, num3) {
  //   return parseInt('' + num1 + num2 + num3);
  // }
  // let result = sumNum(1, 4, 9);

  // alert(result);
  // console.log(result);

  // * Task 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

  // function calcS(a, b) {
  //   if (a === undefined) {
  //     return a * a;
  //   } else {
  //     return a * b;
  //   }
  // }
  // console.log(calcS(2, 8));

  // * Normal  Task 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

  // function evclidNum(num) {
  //   let sum = 0;
  //   for (let i = 1; i < num; i++) {
  //     if (num % i === 0) {
  //       sum += i;
  //     }
  //   }
  //   return sum === num;
  // }

  // let checkNum = parseInt(prompt('Введіть досконале число'));

  // if (evclidNum(checkNum)) {
  //   console.log(`${checkNum} Це є досконалим числом!`);
  // } else {
  //   console.log(`${checkNum} не є досконалим числом!`);
  // }

  // //  * Task 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

  // function findTrueNum(min, max) {
  //   let trueNum = [];
  //   for (let i = min; i <= max; i++) {
  //     if (evclidNum(i)) {
  //       trueNum.push(i);
  //     }
  //   }
  //   return trueNum;
  // }

  // let min = 1;
  // let max = 10000;
  // let trueNumRange = findTrueNum(min, max);
  // console.log('Досконалі числа в діапазоні від 1 до 1000', trueNumRange);
};
homeworksFunctions();
