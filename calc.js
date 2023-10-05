let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')
let btn_dot = document.getElementById('btn_dot')

let plus = document.getElementById('opr_plus')
let minus = document.getElementById('opr_sub')
let mul = document.getElementById('opr_mul')
let div = document.getElementById('opr_div')
let equals = document.getElementById('opr_equals')

let clear = document.getElementById('clear')
let sq = document.getElementById('sq')
let sq_rt = document.getElementById('sqrt')
let bs = document.getElementById('bs')

let display = document.getElementById('display')


let operator_check = false
let initial_check = true
let dot_check = false
let operator = ''

let a, b


const clear_display = () => {
    display.value = 0
    a = 0
    b = 0
    operator = ''
    operator_check = false
    initial_check = true
    dot_check = false
}

function display_result(val) {
    if (val === '.') {
        if (dot_check === true) {
            return
        }
        else {
            dot_check = true
        }
    }
    if (display.value == 0 || display.value == '' || initial_check == true) {
        display.value = val
        initial_check = false
    }
    else {
        display.value += val
    }
}

const assign_operator = (op) => {
    if (operator_check == true) {
        return
    }
    assign_operand()
    operator = op
    operator_check = true
    initial_check = true
    dot_check = false
}

function assign_operand() {
    if (operator_check) {
        equals_click()
        a = Number(display.value)
    }
    else {
        a = Number(display.value)
    }
}

const equals_click = () => {
    if (!operator_check) {
        return
    }
    else {
        b = Number(display.value)
        switch (operator) {
            case '+':
                result = a + b
                display.value = result
                a = result
                break
            case '-':
                result = a - b
                display.value = result
                a = result
                break
            case '*':
                result = a * b
                display.value = result
                a = result
                break
            case '/':
                result = a / b
                display.value = result
                a = result
                break

            default:
                return
        }
        operator = ''
        operator_check = false
        initial_check = true
        dot_check = false
    }
}

const square = () => {
    let input = Number(display.value)
    operator = ''
    operator_check = false
    initial_check = true
    display.value = input * input
}
const square_root = () => {
    let input = Number(display.value)
    operator = ''
    operator_check = false
    initial_check = true
    display.value = Math.sqrt(input)
}

const backspace = () => {
    let input = display.value
    operator = ''
    operator_check = false
    initial_check = true
    display.value = input.slice(0, input.length - 1)
}






btn1.addEventListener('click', () => display_result(1))
btn2.addEventListener('click', () => display_result(2))
btn3.addEventListener('click', () => display_result(3))
btn4.addEventListener('click', () => display_result(4))
btn5.addEventListener('click', () => display_result(5))
btn6.addEventListener('click', () => display_result(6))
btn7.addEventListener('click', () => display_result(7))
btn8.addEventListener('click', () => display_result(8))
btn9.addEventListener('click', () => display_result(9))
btn0.addEventListener('click', () => display_result(0))
btn_dot.addEventListener('click', () => display_result('.'))

clear.addEventListener('click', clear_display)

sq.addEventListener('click', square)
sqrt.addEventListener('click', square_root)
bs.addEventListener('click', backspace)

plus.addEventListener('click', () => assign_operator('+'))
minus.addEventListener('click', () => assign_operator('-'))
mul.addEventListener('click', () => assign_operator('*'))
div.addEventListener('click', () => assign_operator('/'))

equals.addEventListener('click', equals_click)

document.addEventListener('keyup', (event) => {
    const key = event.key;
    const operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operators = ['+', '-', '*', '/', '.'];

    if (operands.includes(key)) {
        event.preventDefault();
        display_result(key)
    }
    if (operators.includes(key)) {
        event.preventDefault();
        assign_operator(key)
    }

    if (key === 'Enter') {
        equals_click()
    }
    if(key === 'Delete'){
        clear_display()
    }
    if(key === 'Backspace'){
        backspace()
    }
  });


/*

operator
 
opearand1(a) , operand2(b)

operator_check = false

a = 123456789
operator = +
operator_check = true
b = 123121131312
 
equals 


*/