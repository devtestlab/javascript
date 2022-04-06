let num1 = 10;
let num2 = 20;

document.getElementById("firstNum").textContent = num1;
document.getElementById("secondNum").textContent = num2;
let res = document.getElementById("res");

function add(){
    let result = num1 + num2;
    res.textContent = "Add = " + result;
}

function subtract(){
    let result = num1 - num2;
    res.textContent = "Subtract = " + result;
}

function divide(){
    let result = num1 / num2;
    res.textContent = "Divide = " + result;
}

function mul(){
    let result = num1 * num2;
    res.textContent = "Multiply = " + result;
}
