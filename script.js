let number1 = 0
let number2 = ""
let operator = ""

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

document.querySelectorAll("#calculator #buttons .line button").forEach((button) => {
    const key = button.innerHTML
    button.addEventListener("click", () => {
        if (key == "C") {
            number1 = 0
            number2 = ""
            operator = ""
        } else if (key == "=") {
            result = operate()
            number1 = Math.floor(result)
            operator = ""
            number2 = ""
        } else if (!Number.isInteger(Number.parseInt(key))) {
            if (operator != "") {
                result = operate()
                number1 = Math.floor(result)
                number2 = ""
            }
            operator = key
        } else {
            if (operator == "") {
                number1 = Number.parseInt(`${number1}${key}`)
            } else {
                number2 = Number.parseInt(`${number2}${key}`)
            }
        }

        setOperation()
    }, false);
});