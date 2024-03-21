// * Normal  Task 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function evclidNum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

let checkNum = parseInt(prompt('Введіть досконале число'));

if (evclidNum(checkNum)) {
  console.log(`${checkNum} Це є досконалим числом!`);
} else {
  console.log(`${checkNum} не є досконалим числом!`);
}

//  * Task 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findTrueNum(min, max) {
  let trueNum = [];
  for (let i = min; i <= max; i++) {
    if (evclidNum(i)) {
      trueNum.push(i);
    }
  }
  return trueNum;
}

let min = 1;
let max = 10000;
let trueNumRange = findTrueNum(min, max);
console.log('Досконалі числа в діапазоні від 1 до 1000', trueNumRange);

export default evclidNum;
