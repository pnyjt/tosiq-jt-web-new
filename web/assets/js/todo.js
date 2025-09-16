$(document).ready(function(){

    $("#store-btn").on("click", function (){

        let value = $("#myinput").val();
        if(value.length === 0) return alert("Add data to input"); 

        $("#list-items").append(`
            <li> 
            ${value} 
            <button onclick="console.log("Completed")" >Completed</button> |
            <button onclick="this.parentNode.remove()" >Remove</button>
            </li>`);
    })

})