const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        if (display.textContent === "0") {
            display.textContent = button.textContent;
    } else {
            display.textContent = display.textContent + button.textContent;
    }

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