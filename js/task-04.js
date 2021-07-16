// Счетчик состоит из спана и кнопок, 
// которые должны увеличивать и уменьшать значение счетчика на 1.

//1) Создай переменную counterValue в которой будет хранится текущее 
// значение счетчика.

//2)  Создай функции increment и decrement 
// для увеличения и уменьшения значения счетчика

//3)  Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// {/* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */}

const type_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  id: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
type_button.sub.addEventListener('click', increment);
type_button.add.addEventListener('click', decrement);













