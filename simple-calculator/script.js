const display = document.getElementById('display');

display.value = "0";

// Function to check if the value is a number
function isNumber(value) {
    return !isNaN(value);
}

function appendToDisplay(input) {

    // Condition to enforce the display to start with a number
    if(display.value === "0") {

        // If the input is a number, replace the display value and return
        if(isNumber(input)) {
            display.value = input;
            return;
        }
        // If the input is not a number, do nothing
        return;
    }
    
    display.value += input;
}

// Clears the display
function clearDisplay() {
    display.value = '0'
}

// Function to calculate the expression using eval
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}
