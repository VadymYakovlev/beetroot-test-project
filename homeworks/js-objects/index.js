// **  TO DO  Obj
// let fruit = prompt("Які фрукти купити?", "apple");
// let bag = {};

// // назву властивості взято зі змінної fruit
// bag[fruit] = 5;
// ⇒

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false

let calculator = {
  sum() {
    return this.a + this.b 
  },
  mul() {
    return this.a * this.b 
  },
  read() {
    this.a = +prompt("a?",0) 
    this.b = +prompt("b?",0)
  }
  }
  

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );