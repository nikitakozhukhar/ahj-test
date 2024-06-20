import cardTypes from "./cardTypes";
import vallidateCardNumber from "./validateCardNumber";

const form = document.querySelector('.form-container');
const inputField = document.querySelector('.input-field');

// Обработчик проверки вводимого значения и принадлежности к платежной системе
inputField.addEventListener('input', () => {
  const cardNumber = inputField.value;
  const type = cardTypes(cardNumber);
  updateCardTypeDisplay(type);
 

  function updateCardTypeDisplay(type) {
    const types = ['Visa', 'MasterCard', 'AmericanExpress', 'DinersInternational', 'Discover', 'JCB', 'Mir'];
    types.forEach(t => {
      const element = document.querySelector(`.${t}`);
     
      if (element) {
        element.style.opacity = t === type ? '1' : '0.3';
      }
    })
  }
})


// Обработчик отправки формы для проверки валидности номера карты
form.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('.input-field');

  if (vallidateCardNumber(input.value) === 'invalid') {
    input.style.borderColor = '#ff00043d';
    input.style.backgroundColor = '#ff00043d';
    input.classList.remove('valid')
    input.classList.add('invalid')
  }
  if (vallidateCardNumber(input.value) === 'valid') {
    input.style.borderColor = '#25ff005c';
    input.style.backgroundColor = '#25ff005c';
    input.classList.remove('invalid')
    input.classList.add('valid')
  }

  if (input.value === '') {
    input.style.borderColor = 'gray';
    input.style.backgroundColor = 'transparent';
  }

})


