export default function cardTypes(cardNumber) {
  const cardTypes = {
    'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
    'MasterCard': /^5[1-5][0-9]{14}$/,
    'American Express': /^3[47][0-9]{13}$/,
    'Diners International': /^36[0-9]{12}$/,
    'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    'JCB': /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/,
    'Mir': /^220[0-4][0-9]{12}$/
  };

  for (let type in cardTypes) {
    if (cardTypes[type].test(cardNumber)) {
        return type;
    }
  }

  return 'Unknown';
}