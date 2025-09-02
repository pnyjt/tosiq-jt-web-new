// for loop
// variable desclaration
// var initialization
// requirement/condition
// increament/ decreament
// var param = prompt("Enter number for table");
// var table = document.getElementById("table");
// for(i = 1; i <= 10; i++){
//     table.innerText += param + " * " + i + " = " + param * i + "\n";
// }

var items = ["Shoes", "T Shirts", "Kids", "Women"];
var list = document.getElementById("list");
// console.log(array1.length);
var i;
for(i = 0; i < items.length; i++){
    list.innerHTML += "<option>" + items[i] + "</option>"
}

function showSelected(){
    var listItem = document.getElementById("list").value;
    var selectedItem = document.getElementById("selected-item");
    // console.log(listItem);
    selectedItem.innerText = listItem;
}

