// const calc = (a, b, operation = "+")
// ==> {
// if (typeof a !== "number" || typeof b !== "number"
//  || isNan (a) || isNaN (b))
// throw new Error ("Invalid input");
// }

// switch (operation) {
//   case "+": {
//     return a + b;
//   }
// case "-": {
//   return a - b;
// }
// case "*": {
//   return a * b;
// }
// case "/": {
//   return a / b;
// }
// default: {
//   throw new Error ("Invalid operation")
// }
// };

// import calc from

// *** Multyply

// let calculator = {
//   sum() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b
//   },
//   read() {
//     this.a = +prompt("a?",0)
//     this.b = +prompt("b?",0)
//   }
//   }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// * Ladder

// const homeworksFunctions = () => {
//   const calc = (a, b) => {
//     const result = a * b;

//     return result;
//   };
//   const result = calc();
//   console.log('result' + result);
// };

// //  Initiakize
// homeworksFunctions();



// * менше з двох чисел a та b.
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// * піднесене до степеня !!++
// let x = prompt("Введіть x");
// let n = prompt("Введіть n");
// function pow(x, n) {
// x = x ** n;
// return x;
// }
// if (n < 1) {
// alert("Cтепінь не підтримується")
// } else {
// alert(pow(x, n))
// }

//  Funtion ASK - Y/N
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "Ви погодились." );
// }

// function showCancel() {
//   alert( "Ви скасували виконання." );
// }

// // використання: функції showOk, showCancel передаються як аргументи для ask
// ask("Ви згодні?", showOk, showCancel);

//* Cкільки років??
// let age = prompt("Скільки вам років?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Привіт!"); } :
//   function() { alert("Вітання!"); };

//  * масив
// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);

// * Параметри за замовчуванням
// function hello(name = "Chris") {
//   console.log(`Hello ${name}!`);
// }

// hello("ч"); // Hello Ari!
// hello(); // Hello Chris!

// const x = 1;

// function a() {
//   const y = 2;
// }

// function b() {
//   const z = 3;
// }

// function output(value) {
//   const para = document.createElement('p');
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }




function myFunction() {

  return 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri';
  
  }
  
  var days = myFunction();