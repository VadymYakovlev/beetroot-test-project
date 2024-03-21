// * Task 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcS(a, b) {
  if (a === undefined) {
    return a * a;
  } else {
    return a * b;
  }
}
console.log(calcS(2, 8));

export default calcS;
