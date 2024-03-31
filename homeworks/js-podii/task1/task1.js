// * Task 1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

document.addEventListener('DOMContentLoaded', () => {
  const textContent = document.getElementById('textContent');
  const textArea = document.getElementById('textArea');

  const editText = (event) => {
    if (event.key === 'e' && event.ctrlKey) {
      event.preventDefault();
      textArea.value = textContent.innerText;
      textContent.style.display = 'none';
      textArea.style.display = 'block';
      textArea.focus();
    } else if (event.key === 's' && event.ctrlKey) {
      event.preventDefault();
      textContent.innerText = textArea.value;
      textContent.style.display = 'block';
      textArea.style.display = 'none';
    }
  };

  document.addEventListener('keydown', editText);
});
