// * Task 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
// * 1.1 Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

const shoppingList = [
  {
    product: 'Хліб',
    buy: false,
    count: 1,
    price: 20,
    total: 20,
  },
  {
    product: 'Молоко',
    buy: true,
    count: 2,
    price: 35,
    total: 70,
  },
  {
    product: 'Сир',
    buy: true,
    count: 1,
    price: 100,
    total: 100,
  },
];

function displayShoppingList(shoppingList) {
  const purchasedProduct = [];
  const unpurchasedProduct = [];
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].buy) {
      purchasedProduct.push(shoppingList[i]);
    } else {
      unpurchasedProduct.push(shoppingList[i]);
    }
  }

  for (let nonlist = 0; nonlist < unpurchasedProduct.length; nonlist++) {
    console.log('Непридбані продукти: ' + unpurchasedProduct[nonlist].product);
  }

  for (let inlist = 0; inlist < purchasedProduct.length; inlist++) {
    console.log('Придбані продукти: ' + purchasedProduct[inlist].product);
  }
}
displayShoppingList(shoppingList);

// * 1.2 Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function getPurchasedProducts() {
  let purchasedProducts = shoppingList.filter((item) => item.buy);
  return purchasedProducts.map((item) => item.product).join(', ');
}

let purchasedItems = getPurchasedProducts();
console.log('Придбано:', purchasedItems);

// * Noraml Task 2.1 Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removeProduct(list, productName) {
  const updatedList = list.filter((item) => item.product !== productName);
  return updatedList;
}

const shopList = removeProduct(shoppingList, 'Сир');
console.log('Забрали Сир', shopList);

// * 2.2 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const newPurchase = {
  product: 'Молоко',
  buy: true,
  count: 2,
  price: 35,
  total: 70,
};

function addPurchase(shoppingList, newPurchase) {
  const existProduct = shoppingList.find(
    (item) => item.product === newPurchase.product
  );
  if (existProduct) {
    existProduct.count += newPurchase.count;
    existProduct.total = existProduct.count * existProduct.price;
  } else {
    shoppingList.push(newPurchase);
  }
  return shoppingList;
}

const updatedShoppingList = addPurchase(shoppingList, newPurchase);
console.log('Докупили молока:', updatedShoppingList);

// * Max. Task 3.1 Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function calcTotal(shoppingList) {
  let total = 0;
  for (let item of shoppingList) {
    total += item.total;
  }
  return total;
}

console.log('Загальна сума всіх продуктів:', calcTotal(shoppingList));

// * 3.2 Підрахунок суми всіх (не) придбаних продуктів.

function calcPurchasedProducts(shoppingList, purchased) {
  let total = 0;
  for (let item of shoppingList) {
    if (item.buy === purchased) {
      total += item.total;
    }
  }
  return total;
}

console.log(
  'Сума придбаних продуктів:',
  calcPurchasedProducts(shoppingList, true)
);
console.log(
  'Сума непридбаних продуктів:',
  calcPurchasedProducts(shoppingList, false)
);

// * 3.3 Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function productsByTotal(shoppingList, list) {
  shoppingList.sort((a, b) => {
    if (list === 'up') {
      return a.total - b.total;
    } else {
      return b.total - a.total;
    }
  });

  for (let item of shoppingList) {
    console.log(`Продукт: ${item.product}, Сума: ${item.total}`);
  }
}

productsByTotal(shoppingList, 'down');
productsByTotal(shoppingList, 'up');

// * Local.Storage shoppingList

function saveLocalStorage(shoppingList) {
  const shoppingListString = JSON.stringify(shoppingList);
  localStorage.setItem('List', shoppingListString);
}
function loadLocalStorage() {
  const shoppingListString = localStorage.getItem('List');
  if (shoppingListString) {
    return JSON.parse(shoppingListString);
  } else {
    return [];
  }
}
saveLocalStorage(shoppingList);
const loadShoppingList = loadLocalStorage();
console.log('loadShoppingList:', loadShoppingList);