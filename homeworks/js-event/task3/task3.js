// * Task 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const container = document.getElementById('container');
const size = document.getElementById('resize-content');

let isResize = false;

size.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isResize = true;
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

const resize = (e) => {
  if (isResize) {
    container.style.width = e.clientX - container.offsetLeft + 'px';
    container.style.height = e.clientY - container.offsetTop + 'px';
  }
};

const stopResize = () => {
  isResize = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
};
