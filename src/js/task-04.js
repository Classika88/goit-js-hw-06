/* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue. */

let counterValue = 0;
const button1 = document.querySelector('button[data-action="decrement"]');

const handleClick1 = () => {
  counterValue -= 1;
  const counter = document.querySelector("#value");
  counter.textContent = counterValue;
};
button1.addEventListener("click", handleClick1);

const button2 = document.querySelector('button[data-action="increment"]');
const handleClick2 = () => {
  counterValue += 1;
  const counter = document.querySelector("#value");
  counter.textContent = counterValue;
};
button2.addEventListener("click", handleClick2);

