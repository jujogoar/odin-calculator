let number1 = 0
let number2 = ""
let operator = ""
let isResult = false

function getOperation() {
    number1 = document.getElementById("number1").innerHTML
    if (number1 == "") {
        number1 = 0
    }
    operator = document.getElementById("operator").innerHTML
    number2 = document.getElementById("number2").innerHTML
}

getOperation()

function setOperation() {
    document.getElementById("number1").innerHTML = number1
    document.getElementById("number2").innerHTML = number2
    document.getElementById("operator").innerHTML = operator
}

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

function processNumber(number) {
    if (Number.isInteger(number)) {
        return Number.parseInt(number)
    }
    return Number.parseFloat(Number.parseFloat(number).toFixed(2))
}

document.querySelectorAll("#calculator #buttons .line button").forEach((button) => {
    const key = button.innerHTML
    button.addEventListener("click", () => {
        if (key == "C") {
            number1 = 0
            number2 = ""
            operator = ""
            isResult = false
        } else if (key == "=") {
            result = operate()
            number1 = processNumber(result)
            isResult = true
            operator = ""
            number2 = ""
        } else if (!Number.isInteger(Number.parseInt(key))) {
            if (operator != "") {
                result = operate()
                number1 = processNumber(result)
                number2 = ""
            }
            isResult = false
            operator = key
        } else {
            if (isResult) {
                number1 = 0
            }
            isResult = false
            if (operator == "") {
                number1 = Number.parseInt(`${number1}${key}`)
            } else {
                number2 = Number.parseInt(`${number2}${key}`)
            }
        }

        setOperation()
    }, false);
});