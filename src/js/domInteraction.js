import cardTypes from "./cardTypes";
import vallidateCardNumber from "./validateCardNumber";

const form = document.querySelector('.form-container');

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('.input-field');
  const paySystem = document.querySelector(`.${cardTypes(input.value)}`);
  const cards = document.querySelectorAll('.card-item');

  if (vallidateCardNumber(input.value) === 'invalid') {
    input.style.borderColor = '#ff00043d';
    input.style.backgroundColor = '#ff00043d'
  }
  if (vallidateCardNumber(input.value) === 'valid') {
    input.style.borderColor = '#25ff005c';
    input.style.backgroundColor = '#25ff005c';
  }

  if (paySystem !== 'Unknown') {
    paySystem.style.opacity = 1;
  }

})


