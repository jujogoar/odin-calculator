let number1 = 0
let number2 = ""
let operator = ""

function getOperation() {
    number1 = document.getElementById("#calculator #screen #number1").innerHTML
    if (number1 == "") {
        number1 = 0
    }
    operator = document.getElementById("#calculator #screen #operator").innerHTML
    number2 = document.getElementById("#calculator #screen #number2").innerHTML
    if (number2 == "") {
        number2 = 0
    }
}

getOperation()

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

    if (operator == "" || (operator == "/" && number2 == 0)) {
        return 0
    }

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