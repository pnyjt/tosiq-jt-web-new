var i;
var j;
var output = document.getElementById("output");
for(i = 1; i<= 5; i++){ // outer loop
    for(j = 1; j<= 10; j++){ // inner loop
        // console.log(i, j);
        output.innerHTML += i + " * " + j + " = " + i*j + "<br>";
        // 1 * 1 = 1 
    }
}