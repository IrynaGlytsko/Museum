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
    if (currentValue > 1) { // Не даем уйти меньше 1
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
    if (currentValue > 1) { // Не даем уйти меньше 1
        inputSenior.value = currentValue - 1;
    }
};


/* // Подсчет общей стоимости

document.getElementById('btnProduct').onclick = function() {
    calcCost();
};

function calcCost() {
    var sP = document.getElementById('selectProduct').value;
    var qP = document.getElementById('quantityProduct').value;
    var total = sP * qP;
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProduct').style.display = 'block';

    if (sP == 0 || qP == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        alert('Укажите значения');
        return;
    }
} */