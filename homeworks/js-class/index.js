// * Task 1. 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти: поле,
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value <= 0) {
      throw new Error("Радіус не може бути від'ємним числом");
    }
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }
  // Обчислення площі кола
  calcScircle() {
    return 3.14 * this._radius ** 2;
  }
  // Обчислення довжини кола
  calcCircleLengths() {
    return 2 * 3.14 * this._radius;
  }
}

// Нехай радіус кола буде 3
const defaultCircle = new Circle(3);
console.log('get Radius Circle: ', defaultCircle.radius);

defaultCircle.radius = 6;
console.log('set Radius Circle: ', defaultCircle.radius);
console.log('Diameter Circle: ', defaultCircle.diameter);
console.log('Площа кола:', defaultCircle.calcScircle());
console.log('Довжина кола:', defaultCircle.calcCircleLengths());

// * Task 2.  Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

class Marker {
  constructor(color, ink) {
    this._color = color;
    this._ink = ink;
  }

  get color() {
    return this._color;
  }

  get ink() {
    return this._ink;
  }

  set ink(value) {
    if (value < 0 || value > 100) {
      throw new Error('Відсоток чорнил має бути до 100');
    }
    this._ink = value;
  }

  // Метод для вводу тексту відповідним кольором маркера
  write(text) {
    let output = '';
    for (const use of text) {
      if (use !== ' ' && this._ink >= 0.5) {
        output += use;
        this._ink -= 0.5;
      } else {
        console.log('На жаль, чорнило закінчилося');
        break;
      }
    }
    console.log(`Текст "${output}" було введено ${this._color} кольором`);
  }
}

// Dикористання маркеру
const myMarker = new Marker('red', 6);
myMarker.write('абракадабра');
console.log('Залишок чорнила:', myMarker.ink + '%');

class RefillableMarker extends Marker {
  constructor(color, ink, capacity) {
    super(color, ink);
    this._capacity = capacity;
  }

  // Заправка маркеру
  refill(percentage) {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Відсоток чорнил має бути до 100');
    }
    this._ink += percentage;
    if (this._ink > this._capacity) {
      this._ink = this._capacity;
    }
    console.log(`Маркер заправлено. Залишок ${this._ink}% чорнила`);
  }
}

// Використаємо класу
const refillableMarker = new RefillableMarker('red', 6);
console.log('Було чорнила:', refillableMarker.ink + '%');
refillableMarker.refill(90);
console.log('Стало чорнила:', refillableMarker.ink + '%');

// * Task 3. Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
//  Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

const BankEmployees = [
  new Employee('Bruce Wayne', 'Owner'),
  new Employee('Peter Parker', 'Manager'),
  new Employee('Sonya Blade', 'Accountant'),
];

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    return `<th>Name</th><th>Position</th>
      ${this.employees
        .map(
          (employee) =>
            `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`
        )
        .join('')}`;
  }
}

const empTable = new EmpTable(BankEmployees);
const employeeList = document.getElementById('employee-list');
employeeList.innerHTML = empTable.getHtml();

// * Класи наслідування/
// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. У класі User повинні бути такі компоненти:

// getName
// getRole
// login
// logout
// сhangeName
// changePassword
// У класі Admin повинні бути такі компоненти:

// addUser
// removeUser
// changeUserRole
// getAllUsers
// removeAllUsers

class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('Invalid role value. Must be "admin" or "user"');
      return;
    }
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} logged in.`);
  }

  logout() {
    console.log(`${this.name} logged out.`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Name changed to ${newName}`);
  }

  changePassword(newPassword) {
    if (typeof newPassword !== 'string' || newPassword.length < 6) {
      alert('The password must be at least 6 characters');
      return;
    }
    console.log(`Password changed to ${newPassword}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(newUser) {
    if (!(newUser instanceof User)) {
      console.log('Added object must be a User');
      return;
    }
    this.users.push(newUser);
    console.log(`User ${newUser.getName()} successfully added.`);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User ${user.getName()} successfully deleted`);
    } else {
      console.log(`User ${user.getName()} is indefined`);
    }
  }

  changeUserRole(user, newRole) {
    if (user instanceof User && (newRole === 'admin' || newRole === 'user')) {
      user.role = newRole;
      console.log(
        `User role ${user.getName()} successfully changed on ${newRole}`
      );
    } else {
      console.log('Incorrect data for changing the user role');
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log('All users deleted');
  }
}

// Dикористання класів
const user1 = new User('Petro', 'admin');
console.log('User:', user1.getName());
console.log('Role:', user1.getRole());
user1.login();
user1.changeName('John');
user1.changePassword('newpassword');
user1.logout();

const admin = new Admin('SuperAdmin');
const user2 = new User('Oleg', 'user');

admin.addUser(user2);
admin.changeUserRole(user2, 'admin');
admin.removeUser(user2);
admin.getAllUsers(user2);
admin.removeAllUsers(user2);
