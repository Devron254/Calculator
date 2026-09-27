const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

const equalsButton = document.querySelector(".equals");

let firstNumber;
let operator;
let shouldClearDisplay = false;
let justCalculated = false;

const operatorButtons = document.querySelectorAll(".operator");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (shouldClearDisplay === true) {
            display.textContent = button.textContent;
            shouldClearDisplay = false;

        } else if (operator === undefined) {
        
        if (display.textContent === "0") {
            display.textContent = button.textContent;
    } else {
            display.textContent = display.textContent + button.textContent;
    }
        } else {
            display.textContent = display.textContent + button.textContent;
        }
        
        });
    });

    
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = Number(display.textContent);
        operator = button.textContent;
        shouldClearDisplay = true;
    });
});

equalsButton.addEventListener("click", () => {
    if (justCalculated === true) {
        return;
    }
    
    const secondNumber = Number(display.textContent);
    const result = operate(firstNumber, operator, secondNumber);
    display.textContent = result;
    shouldClearDisplay = true;
    justCalculated = true;
});

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,operator,b) {
    if (operator === "+") {
        return add(a,b);
    } else if (operator === "-") {
        return subtract(a,b);
    } else if (operator === "*") {
        return multiply(a,b);
    } else if (operator === "/") {
        return divide(a,b);
    }
}