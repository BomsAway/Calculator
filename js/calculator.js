"use strict";

(function() {

    var numberedButtons = document.getElementsByClassName('calc-button');
    var operatorButtons = document.getElementsByClassName('operator');
    var equals = document.getElementById('equals');
    var clear = document.getElementById('clear');
    var inputOne = document.getElementById('input-one');
    var operator = document.getElementById('operand');
    var inputTwo = document.getElementById('input-two');
    var i=0;

    function display() {
        if (operator.value === '') {
            inputOne.value = inputOne.value + this.innerHTML;
        } else {
            inputTwo.value = inputTwo.value + this.innerHTML;
        }
        console.log(this.innerHTML);
    }

    for (i=0; i<numberedButtons.length; i++) {
        numberedButtons[i].addEventListener("click", display);
    }
//-----------------------------------------
    function operation() {
        operator.value = this.innerHTML;
    }

    for ( i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", operation);
    }
//-----------------------------------------

    function total() {

        if (inputTwo.value === '') {
            alert('Invalid entry');
        }

        if (+inputOne.value / +inputTwo.value && +inputTwo.value === 0) {
            inputOne.value = '';
            inputTwo.value = '';
            operator.value = '';
            alert("You can't do that... THAT'S IMPOSSIBLE!")
        }

        switch (operator.value) {
            case "+":
                inputOne.value = +inputOne.value + +inputTwo.value;
                inputTwo.value = '';
                break;
            case "-":
                inputOne.value = +inputOne.value - +inputTwo.value;
                inputTwo.value = '';
                break;
            case "X":
                inputOne.value = +inputOne.value * +inputTwo.value;
                inputTwo.value = '';
                break;
            case "/":
                inputOne.value = +inputOne.value / +inputTwo.value;
                inputTwo.value = '';
                break;

        }
    }

    equals.addEventListener("click", total);
//-------------------------------------------

    function clearing() {
        inputOne.value = '';
        inputTwo.value = '';
        operator.value = '';
    }

    clear.addEventListener("click", clearing);

})();
