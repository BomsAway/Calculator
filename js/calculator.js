"use strict";

(function() {

    var numberedButtons = document.getElementsByClassName('calc-button');
    var operatorButtons = document.getElementsByClassName('operator');
    var inputOne = document.getElementById('input-one');
    var operator = document.getElementById('operand');
    var inputTwo = document.getElementById('input-two');
    var equals = document.getElementById('equals');
    var clear = document.getElementById('clear');
    var i=0;

//-----------------------------------------
    function display() {
        if (operator.value === '') {
            inputOne.value = inputOne.value + this.innerHTML;
        } else {
            inputTwo.value = inputTwo.value + this.innerHTML;
        }
    }

    for (i=0; i<numberedButtons.length; i++) {
        numberedButtons[i].addEventListener("click", display);
    }
//-----------------------------------------
    function operation() {
        operator.value = this.innerHTML;
    }

    for (i=0; i<operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", operation);
    }
//-----------------------------------------
    function total() {
        switch (operator.value) {
            case "+":
                inputOne.value = +inputOne.value + +inputTwo.value;
                break;
            case "-":
                inputOne.value = +inputOne.value - +inputTwo.value;
                break;
            case "/":
                inputOne.value = +inputOne.value / +inputTwo.value;
                break;
            case "x":
                inputOne.value = +inputOne.value * +inputTwo.value;
                break;
            default:
                inputOne.value = '';
                operator.value = '';
;               inputTwo.value = '';
        }

        inputTwo.value = '';
    }

    equals.addEventListener("click", total);
//-------------------------------------------
    function clearing() {
        inputOne.value = '';
        operator.value = '';
        inputTwo.value = '';
    }

    clear.addEventListener("click", clearing);


})();
