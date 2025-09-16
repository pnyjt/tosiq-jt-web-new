$(document).ready(function(){

    $("#store-btn").on("click", function (){

        let value = $("#myinput").val();
        if(value.length == 0) return; 

        $("#list-items").append(`
            <li> 
            ${value} 
            <button onclick="this.parentNode.style.color = 'red' " >Completed</button> |
            <button onclick="this.parentNode.remove()" >Remove</button>
            </li>`);
    })

})