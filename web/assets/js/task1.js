function showRows(){
    var val = document.getElementById("number").value;
    var result = document.getElementById("result");
    
    result.innerText = "";
    for(var i = 1; i <= val; i++){
        result.innerText += "I love Javascript \n";
    }
}