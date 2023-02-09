let firstOperand = '';
let secondOperand = '';
let selectedOperator = '';
let tempNumber = '';



const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', clickButton);
})

const operators = document.querySelectorAll('.operators');
operators.forEach((op) => {
  op.addEventListener('click', clickOperator)
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', clickEqual);

const clear = document.querySelector('.clear');
clear.addEventListener('click', clickClear)



function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

function operate(a, b, operator) {
  let f = parseInt(a)
  let s = parseInt(b)
  if(operator == '+') {
    return add(f, s);
  }

  if(operator === '-') {
    return subtract(f, s);
  }

  if(operator === '*') {
     return multiply(f, s);
  }

  if(operator === '/') {
    return divide(f, s);
  }
}

function clickButton(e) {
  tempNumber += e.target.innerHTML;
  console.log('Stai premendo il numero: '+ tempNumber);
}

function clickOperator(e) {
  if(!firstOperand) {
    firstOperand = tempNumber;
    tempNumber = '';
    selectedOperator = e.target.innerHTML;
    console.log('Primo operando: ' + firstOperand);
    console.log('Operatore scelto: '+ selectedOperator);
  } else {
    secondOperand = tempNumber
    if (secondOperand == '') {
      selectedOperator = e.target.innerHTML;
    }
    tempNumber = ''
    console.log('Secondo operando: ' + secondOperand);
  }
  console.log(firstOperand, secondOperand, selectedOperator);
  if(operate(firstOperand,secondOperand, selectedOperator)) {
    console.log('Risultato: ' + operate(firstOperand, secondOperand, selectedOperator));
    firstOperand = operate(firstOperand, secondOperand, selectedOperator);
    secondOperand = '';
    selectedOperator = e.target.innerHTML;
  }
}


function clickEqual() {
  if(firstOperand && selectedOperator) {
    if(!firstOperand) {
      firstOperand = tempNumber;
      tempNumber = '';
      selectedOperator = e.target.innerHTML;
      console.log('Primo operando: ' + firstOperand);
      console.log('Operatore scelto: '+ selectedOperator);
    } else {
      secondOperand = tempNumber
      tempNumber = ''
      console.log('Secondo operando: ' + secondOperand);
    }
  
  
    console.log(firstOperand, secondOperand, selectedOperator);
    if(operate(firstOperand,secondOperand, selectedOperator)) {
      console.log('Risultato: ' + operate(firstOperand, secondOperand, selectedOperator));
      tempNumber = operate(firstOperand, secondOperand, selectedOperator);
      firstOperand = ''
      secondOperand = '';
      selectedOperator = '';
    }
  }
}

function clickClear() {
  firstOperand = ''
  secondOperand = ''
  tempNumber = ''
  selectedOperator = ''
}
