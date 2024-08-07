const screen = document.querySelector("#screen")
const operators = document.querySelectorAll(".operator")
const operands = document.querySelectorAll(".operand")
const clear = document.querySelector("#clear")
const percent = document.querySelector("#percent")
const plusMinus = document.querySelector("#plusMinus")
const dot = document.querySelector("#dot")

let first = ""
let second = ""
let currentVal = ""
let sign = ""

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        if (currentVal.length < 9) {
            currentVal += String(operand.textContent)
        }
        screen.textContent = currentVal

        if (first) {
            second = currentVal
        }
        else {
            first = currentVal
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {

        if ((operator.textContent == "=" || sign) && first && second) {
            switch (sign) {
                case "+":
                    currentVal = Number(first) + Number(second)
                    break;
                case "-":
                    currentVal = Number(first) - Number(second)
                    break;
                case "*":
                    currentVal = Number(first) * Number(second)
                    break;
                case "/":
                    currentVal = Number(first) / Number(second)
                    break;
            }
            currentVal = Math.round((currentVal + Number.EPSILON) * 100) / 100
            screen.textContent = currentVal
            first = currentVal
            second = ""
        }

        sign = operator.textContent
        
        if (currentVal) {
            first = currentVal
        }
        currentVal = ""
    })
})

clear.addEventListener("click", () => {
    screen.textContent = "0"
    currentVal = ""
    first = ""
    second = ""
    sign = ""
})

plusMinus.addEventListener("click", () => {
    currentVal *= -1
    screen.textContent = currentVal

    if (first) {
        second = currentVal
    }
    else {
        first = currentVal
    }
})

percent.addEventListener("click", () => {
    if (!currentVal) {
        currentVal = first
    }
    
    currentVal *= 0.01
    screen.textContent = currentVal

    if (first) {
        second = currentVal
    }
    else {
        first = currentVal
    }
})

dot.addEventListener("click", () => {
    if (!currentVal.split("").includes(".")) {
        currentVal += "."
        screen.textContent += "."
    }
})




