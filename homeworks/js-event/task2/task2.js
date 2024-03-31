// * Task 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

monthList.onclick = (e) => {
  if (e.target.tagName !== 'TH') return;

  const th = e.target;
  sortMonthList(th.cellIndex, th.dataset.type);
};

const sortMonthList = (colNum, type) => {
  const tbody = monthList.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);

  let compare;
  switch (type) {
    case 'number':
      compare = (rowA, rowB) =>
        rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      break;
    case 'string':
      compare = (rowA, rowB) =>
        rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      break;
  }

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
};
