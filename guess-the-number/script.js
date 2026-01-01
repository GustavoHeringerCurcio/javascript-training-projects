//secret number is 10

let secretNumber = Math.floor(Math.random() * 100) + 1;

const cheat = document.getElementById('cheat');
const input = document.getElementById('input');
const hint = document.getElementById('hint')
let hudAttempts = document.getElementById('attempts')


let maxNumbers = 100;
let attempts = 7;

hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`


function verify() {


    //check if has attempts to continue playing
    
    const value = Number(input.value);

    //verificação se é um valor entre 0 e 100
    if (value < 1 || value > maxNumbers) {
        window.alert('pls, try a number between 1 and 100')
        return;
    }

    //win a game
    if (value == secretNumber){

        input.value = ``;

        if (isHardcore == true) {
            alert('You win! in HARDCORE MODE!')
            secretNumber = Math.floor(Math.random() * 1000) + 1;
            attempts = attempts = 7;
            hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`

            if (isCheating == true){
                cheat.innerText = `Cheat Enabled: ${secretNumber}`
                return;
            }
        } 
        else {
            alert('You win!')
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = attempts = 7;
            hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`

            if (isCheating == true){
                cheat.innerText = `Cheat Enabled: ${secretNumber}`
                return;
            }
            
        }

    }

      if (input.value > 0) {
        attempts = attempts -1;
        hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`
    }

    if (attempts == 0) {
        alert('You Lose')
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 7;
        hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`

        if (isCheating == true) {
             cheat.innerText = `Cheat Enabled: ${secretNumber}`
        }

    }

    

    const almost = (value - secretNumber)

    //verify if value is almost the same of value
    if (almost >= -3 && almost <= 3 ) {
        if (almost > 0) {
            hint.innerText = `Almost! Try a lower number`
            return;
        } else {
            hint.innerText = `Almost! Try a higher number`
            return;
        }
    }

    //verify if secretNumber is too high or high
    if (value > secretNumber) {
        if ((value - 30) > secretNumber) {
            hint.innerText = "Too high., Try a lower number"
            
        } else {
            hint.innerText = `Try a lower number`
        }

        
    } 

    //verify if secretNumber is too low or low

    if (value < secretNumber) {
        if((value + 30) < secretNumber) {
            hint.innerText = "Too low, try a higher number"
            
        } else {

            hint.innerText = `Try a higher number`

        }

    }

    input.value = ``;
}

let isCheating = false;

//cheat button
function habilityCheat() {

    if(isCheating == true){
        cheat.innerText = ``;
        isCheating = false;
    } 
    else {
        cheat.innerText = `Cheat Enabled: ${secretNumber}`;
        isCheating = true;
    }
}

let maxquantity = document.getElementById('max-quantity')

let isHardcore = false;

function hardcoreBtn() {

    isHardcore = true;
    maxNumbers = 1000;
    attempts = attempts = 7;
    hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`
    //Clicking the button generates a new value.
    secretNumber = Math.floor(Math.random() * 1000) + 1;

    maxquantity.innerText = `Guess the secret number between 1 and 1000`
    alert('Mode: HARDCORE! a new number will be generated!')
    if(isCheating == true) {
        cheat.innerText = `Cheat Enabled: ${secretNumber}`
    }
    return;
}

function normalBtn() {

    isHardcore = false;
    maxNumbers = 100;
    attempts = attempts = 7;
    hudAttempts.innerHTML = ` You already have <strong>${attempts}</strong> attempts!`

    //Clicking the button generates a new value.
    secretNumber = Math.floor(Math.random() * 100) + 1;

    alert('Mode: NORMAL! a new number will be generated!')

    maxquantity.innerText = `Guess the secret number between 1 and 100`

    if(isCheating == true) {
        cheat.innerText = `Cheat Enabled: ${secretNumber}`
    }
}