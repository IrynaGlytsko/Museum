// Находим элементы для Basic

const inputBasic = document.getElementById('basic-count-input');
const btnMinusBasic = document.getElementById('basic-minus');
const btnPlusBasic = document.getElementById('basic-plus');

// Логика для Плюса
btnPlusBasic.onclick = function() {
    inputBasic.value = parseInt(inputBasic.value) + 1;
};

// Логика для Минуса
btnMinusBasic.onclick = function() {
    let currentValue = parseInt(inputBasic.value);
    if (currentValue > 1) {
        inputBasic.value = currentValue - 1;
    }
};


// Находим элементы для Senior

const inputSenior = document.getElementById('senior-count-input');
const btnMinusSenior = document.getElementById('senior-minus');
const btnPlusSenior = document.getElementById('senior-plus');

// Логика для Плюса
btnPlusSenior.onclick = function() {
    inputSenior.value = parseInt(inputSenior.value) + 1;
};

// Логика для Минуса
btnMinusSenior.onclick = function() {
    let currentValue = parseInt(inputSenior.value);
    if (currentValue > 1) {
        inputSenior.value = currentValue - 1;
    }
};


// Настройка слайдера в разделе Explore picture

const slider = document.querySelector('.slider-input');
const beforeImage = document.querySelector('.image-before');
const handle = document.querySelector('.handle');

slider.addEventListener('input', (e) => {
  let value = e.target.value;

  // Меняем ширину верхнего фото
  beforeImage.style.width = `${value}%`;
  // Сдвигаем линию с кнопкой
  handle.style.left = `${value}%`;
});
