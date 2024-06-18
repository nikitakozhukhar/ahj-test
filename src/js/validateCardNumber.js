export default function vallidateCardNumber(cardNumber) {
  
  const digits = cardNumber.split('').map(Number)
  
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    
    digits[i] *= 2;

    if (digits[i] > 9) {
      digits[i] -= 9
    }
  }

  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  const controleNum = digits[digits.length - 1];
  const calcControleNum = 10 - ((sum - controleNum) % 10);

  if (controleNum === calcControleNum) {
    return 'valid'
  } else {
    return 'invalid'
  }
}


