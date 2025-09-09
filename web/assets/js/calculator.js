
let displayScreen = document.getElementById('display') 

function insertValue (val) {
    displayScreen.value += val;
}

function clearDisplay () {
    displayScreen.value = "";
}

function calculate(){
    try {
        displayScreen.value = eval(displayScreen.value);
    } catch (error) {
        displayScreen.value = "Invalide Entry";
    }
}

