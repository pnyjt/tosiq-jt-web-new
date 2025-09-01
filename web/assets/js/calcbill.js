function calculateBill(){
    var units   = document.getElementById("units").value;
    var output  = document.getElementById("output");

    var unitPrice   = 11;
    var tax         = 455;
    var fuelTax     = 305;

    // units:  200, 250, 300, above
    if (units <= 200) {
        output.innerText = units * unitPrice + tax + fuelTax;
    } else if (units > 200 && units <= 250) { // range defined
        unitPrice = 23;
        output.innerText = units * unitPrice + tax + fuelTax;
    } else if (units > 250 && units <= 300) { // range defined
        unitPrice = 44;
        output.innerText = units * unitPrice + tax + fuelTax;
    } else {        
        unitPrice = 70;
        output.innerText = units * unitPrice + tax + fuelTax;
    }
}