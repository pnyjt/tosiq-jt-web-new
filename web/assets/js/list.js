function addNewItem(){
    var newItem = document.getElementById("new-item").value;
    var list  = document.getElementById("output-list");

    list.innerHTML += "<li>" + newItem + "</li>";
}