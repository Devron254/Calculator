const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

let firstNumber;
let operator;
let shouldClearDisplay = false;

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
        firstNumber = display.textContent;
        operator = button.textContent;
        shouldClearDisplay = true;
    });
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