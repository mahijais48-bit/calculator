  let calculation = '';
    let display = document.querySelector('.js-display');

    function updateCalc(value) {
        calculation += value;
        display.innerText = calculation;
    }

    function calculate() {
        calculation = eval(calculation);
        display.innerText = calculation;
    }

    function clearCalc() {
        calculation = '';
        display.innerText = '';
    }