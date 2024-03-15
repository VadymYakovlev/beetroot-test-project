1;
let username = '';
username = prompt('Привіт, як тебе звати?');
console.log(username);
username = "Гарне ім'я";
alert(username);
console.log(username);

const YEAR = 2024;
const dayOfBirhday = +prompt('Ваша дата народження?');
console.log('Вік:', YEAR - dayOfBirhday);

2;
confirm('Бажаєте розрахувати периметр? ');
console.log(confirm);

const sideSquare = 'Периметр';
const formula = 'Сторона * 4';

let number = '';
number = prompt('Вкажіть сторону квадрата');
console.log(number);

alert(formula);
const result = number * 4;

alert(sideSquare + ' ' + result);
console.log(sideSquare, result);

3;
confirm('Розрахувати площу кола?');
console.log(confirm);

const discription = 'Площа кола';
radius = '';
radius = prompt('Вкажіть радіус кола');
console.log(radius);

const formulaCircle = 3.14 * radius * radius;
alert(discription + ' ' + formulaCircle);
console.log('Площа кола', formulaCircle);

4;
text = 'Швидкість необхідна км/год';
let distance = '';
distance = prompt('Вкажіть відстань між пунктами А та Б?');
console.log(distance);

let time = '';
time = prompt("За скільки годин потрібно дістатись:'?");
console.log(time);

const formulaSpeed = distance / time;
alert(text + ' ' + formulaSpeed);
console.log('Швидкість необхідна км/год', formulaSpeed);
