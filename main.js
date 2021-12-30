let firstOperand ='';
let secondOperand ='';
let operator = '';
const displayValue = document.querySelector('.display');

//calculator functions

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1, num2){
    if (num2 === 0) {
        return "LOL You can't divide by 0!"
    } else {
         return num1/num2;
    }
}

function operate(operation, num1,num2) {
    if (operation === '+') {
        displayValue.innerText = add(num1,num2);
    } else if (operation === '-' ) {
        displayValue.innerText = subtract(num1,num2);
    }else if (operation === 'x' ) {
        displayValue.innerText = multiply(num1,num2);
    } else {
        displayValue.innerText = divide(num1,num2);
    }
    
    if (displayValue.innerText.length > 5) {
        displayValue.innerText = Math.round(parseFloat(displayValue.innerText)*10000)/10000;
    }
}

//calculator buttons and input


const input = document.querySelectorAll('.number');
input.forEach(button => button.addEventListener ('click', btn => displayValue.innerText = displayValue.innerText + btn.target.innerText));
 
const operation = document.querySelectorAll('.operator')
operation.forEach(btn => btn.addEventListener ('click', () => {
    if (firstOperand !== '') {
        secondOperand = parseFloat(displayValue.innerText);
        operate(operator,firstOperand, secondOperand); //check if a current operation needs to be resolved, and if so, resolve before allowing further calculations
    }
    firstOperand= parseFloat(displayValue.innerText); //soution of first operation becomes the new value to be used for the further calculation desired
        operator = btn.innerText;
        displayValue.innerText = '';
}));

const solution = document.querySelector('.equals');
solution.addEventListener ('click', () => {
    if (firstOperand !== '') {
        secondOperand = parseFloat(displayValue.innerText);
        operate(operator,firstOperand, secondOperand);
    } else {
        displayValue.innerText = ''; //prevents NaN
    }
    firstOperand = ''; //resets the firstOperand so user can use the solution as the first Operand for the nexd calculation
});



const clear = document.querySelector('.clear');
clear.addEventListener ('click', () => {
    displayValue.innerText = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
});

const decimalPoint = document.querySelector('.decimal');
decimalPoint.addEventListener ('click', () => {
    if (displayValue.innerText.includes('.')) {
        return;
    } else {
        displayValue.innerText += '.';
    }});

const deleteLastValue = document.querySelector('.deleteLastValue');
deleteLastValue.addEventListener ('click', () => displayValue.innerText = displayValue.innerText.slice(0,-1));