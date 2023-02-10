let firstOperand = ''
let secondOperand = ''
let selectedOperator = ''
let tempNumber = ''


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

const upperDisplay = document.querySelector('#upper');
const lowerDisplay = document.querySelector('#lower')



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
  let f = parseFloat(a)
  let s = parseFloat(b)
  if(operator == '+') {
    return add(f, s);
  }

  if(operator === '-') {
    return subtract(f, s);
  }

  if(operator === 'x') {
     return multiply(f, s);
  }

  if(operator === '/') {
    return divide(f, s);
  }
}

function clickButton(e) {
  tempNumber += e.target.innerHTML;
  lowerDisplay.innerHTML = `${tempNumber}`
}

function clickOperator(e) {
  lowerDisplay.innerHTML = ''
  if(!firstOperand) {
    firstOperand = tempNumber;
    tempNumber = '';
    selectedOperator = e.target.innerHTML; 
  } else {
    secondOperand = tempNumber
    if (secondOperand == '') {
      selectedOperator = e.target.innerHTML;
    }
    tempNumber = ''    
  }
  upperDisplay.innerHTML = `${firstOperand} ${selectedOperator} ${secondOperand}`
  if(!isNaN(operate(firstOperand,secondOperand, selectedOperator)) ) {
    lowerDisplay.innerHTML = `${operate(firstOperand, secondOperand, selectedOperator)}`
    firstOperand = operate(firstOperand, secondOperand, selectedOperator);
    secondOperand = '';
    selectedOperator = e.target.innerHTML;
    upperDisplay.innerHTML = `${firstOperand} ${selectedOperator} ${secondOperand}`
    lowerDisplay.innerHTML = ''
  }
}


function clickEqual() {
  if((firstOperand || firstOperand == '0') && selectedOperator) {
    if(!firstOperand) {
      firstOperand = tempNumber;
      tempNumber = '';
      selectedOperator = e.target.innerHTML;
    } else {
      secondOperand = tempNumber
      tempNumber = ''
    }
  
    upperDisplay.innerHTML = `${firstOperand} ${selectedOperator} ${secondOperand} =`
    if(!isNaN(operate(firstOperand,secondOperand, selectedOperator))) {
      lowerDisplay.innerHTML = `${operate(firstOperand, secondOperand, selectedOperator)}`
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
  upperDisplay.innerHTML = ''
  lowerDisplay.innerHTML = ''
}

