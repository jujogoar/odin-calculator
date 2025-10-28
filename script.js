let number1 = 0
let number2 = 0
let operator = ""

function add() {
    return number1 + number2
}

function subtract() {
    return number1 - number2
}

function multiply() {
    return number1 * number2
}

function divide() {
    return number1 / number2
}

function operate() {
    if (operator == "+") {
        return add()
    }

    if (operator == "-") {
        return subtract()
    }

    if (operator == "*") {
        return multiply()
    }

    if (operator == "/") {
        return divide()
    }
}