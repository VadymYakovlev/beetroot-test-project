// * Task 1. Мінімум. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),

const myCar = {
  виробник: 'Ford',
  модель: 'Mustang',
  'рік випуску': 1969,
  'середня швидкість': 120,
  'обсяг паливного баку': 60,
  'середня витрата палива на 100 км': 12,
  водії: ['Брат', 'Сестра', 'Дублер'],

  // 1.1 Отримати інфо про авто
  getInfoCar: function () {
    console.log('Виробник: ' + this.виробник);
    console.log('Модель: ' + this.модель);
    console.log('Рік випуску: ' + this['рік випуску']);
    console.log('Середня швидкість: ' + this['середня швидкість']);
    console.log('Обсяг паливного баку: ' + this['обсяг паливного баку']);
    console.log(
      'Середня витрата палива на 100 км: ' +
        this['середня витрата палива на 100 км']
    );
    console.log('Водії: ' + this.водії.join(', '));
  },
  // 1.4 Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
  // Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

  // Підрахунок часу та кількості палива для подолання відстані
  calculateTrip: function (distance) {
    let totalTime = distance / this['середня швидкість'];
    let totalFuel = (distance * this['середня витрата палива на 100 км']) / 100;
    // Кількість перерв
    let breaks = Math.floor(totalTime / 4);
    totalTime += breaks;
    totalFuel += breaks;
    return {
      totalTime: totalTime,
      totalFuel: totalFuel,
    };
  },
};
myCar.getInfoCar();

// У разі подолання відстані в 500 км
const distance = 500;
const tripInfo = myCar.calculateTrip(distance);
console.log('Загальний час подорожі:', tripInfo.totalTime.toFixed(1), 'год');
console.log('Загальна кількість палива:', tripInfo.totalFuel, 'л');

// 1.2 Додати водія нового
myCar.водії.push('Стажер');
console.log(myCar['водії']);

// 1.3 Перевірка водія на наявність його ім’я у списку
function checkDriver(nameDriver, car) {
  return car.водії.includes(nameDriver);
}
let nameDriver = prompt('Введіть водія', 'Теща');
if (checkDriver(nameDriver, myCar)) {
  console.log(` ${nameDriver} може керувати авто`);
} else {
  console.log(`Заборонено керувати авто для ${nameDriver}`);
}

// * Task 2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//  2.1 Для виведення часу на екран.
let actualTime = {
  hours: 8,
  minutes: 30,
  seconds: 15,
};
function showTime(time) {
  return `${time.hours}:${time.minutes}:${time.seconds}`;
}
console.log('Поточний час: ' + showTime(actualTime));

// 2.2 Додати години +8 годин
function updateHours(time, addedHours) {
  const newHours = (time.hours + addedHours) % 24;
  return {
    hours: newHours,
    minutes: time.minutes,
    seconds: time.seconds,
  };
}

actualTime = updateHours(actualTime, 8);
console.log('Додано +8 год:', actualTime);

// 2.3 Додати  +30 хв
function updateMinutes(time, addedMinutes) {
  const newMinutes = (time.minutes + addedMinutes) % 60;
  const addHours = Math.floor((time.minutes + addedMinutes) / 60);
  const newHours = (time.hours + addHours) % 24;
  return {
    hours: newHours,
    minutes: newMinutes,
    seconds: time.seconds,
  };
}

actualTime = updateMinutes(actualTime, 30);
console.log('Додано +30 хв:', actualTime);

// 2.4 Додати +15 cек
function updateSeconds(time, addedSeconds) {
  let actualTimeInSeconds =
    time.hours * 3600 + time.minutes * 60 + time.seconds;
  actualTimeInSeconds += addedSeconds;
  const newHours = Math.floor(actualTimeInSeconds / 3600) % 24;
  const newMinutes = Math.floor((actualTimeInSeconds % 3600) / 60);
  const newSeconds = actualTimeInSeconds % 60;
  return {
    hours: newHours,
    minutes: newMinutes,
    seconds: newSeconds,
  };
}

actualTime = updateSeconds(actualTime, 15);
console.log('Додано +15 сек:', actualTime);

// * Task 3. Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
/// 3.1 *Додавання
const dribOne = {
  x: 2,
  y: 3,
};
const dribTwo = {
  x: 1,
  y: 4,
};

function addDrib(dribOne, dribTwo) {
  const comY = dribOne.y * dribTwo.y;
  const newX = dribOne.x * dribTwo.y + dribTwo.x * dribOne.y;
  return {
    x: newX,
    y: comY,
  };
}
const addResult = addDrib(dribOne, dribTwo);
console.log('Результат додавання:', addResult.x + '/' + addResult.y);

/// 3.2 Віднімання
function minusDrib(dribOne, dribTwo) {
  const comY = dribOne.y * dribTwo.y;
  const newX = dribOne.x * dribTwo.y - dribTwo.x * dribOne.y;
  return {
    x: newX,
    y: comY,
  };
}
const minResult = minusDrib(dribOne, dribTwo);
console.log('Результат віднімання:', minResult.x + '/' + minResult.y);

// 3.3 Ділення
const multiplyResult = multiplyDrib(dribOne, { x: dribTwo.y, y: dribTwo.x });
console.log('Результат ділення:', multiplyResult.x + '/' + multiplyResult.y);

// 3.4 Множення та скорочення
function multiplyDrib(dribOne, dribTwo) {
  let x = dribOne.x * dribTwo.x;
  let y = dribOne.y * dribTwo.y;
  // Найбільший спільний дільник (НСД)
  function НСД(a, b) {
    if (!b) {
      return a;
    }
    return НСД(b, a % b);
  }
  const ncd = НСД(x, y);
  x /= ncd;
  y /= ncd;
  return { x, y };
}

const result = multiplyDrib(dribOne, dribTwo);
console.log('Результат множення:', result.x + '/' + result.y);
