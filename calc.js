const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

const equalsButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const decimalButton = document.querySelector(".decimal");

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
            justCalculated = false;

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

decimalButton.addEventListener("click", () => {
        if (shouldClearDisplay === true) {
            display.textContent = "0.";
            shouldClearDisplay = false;
            justCalculated = false;
        } else if (!display.textContent.includes(".")) {
            display.textContent = display.textContent + ".";
        }
    });
    
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "Error") {
            return;
        }
        firstNumber = Number(display.textContent);
        operator = button.textContent;
        shouldClearDisplay = true;
        justCalculated = false;
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

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = undefined;
    operator = undefined;
    shouldClearDisplay = false;
    justCalculated = false;

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
    if (b === 0) {
        return "Error";
    }
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