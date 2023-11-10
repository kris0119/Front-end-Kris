let currentInput = '';

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}