function showResult() {
    var number = document.getElementById("no1").value;
    var output = document.getElementById("output");

    if (number > 0) { // true
        output.innerText = "The given number is positive"
    } else { // false
        output.innerText = "The given number is negative";
    }
}