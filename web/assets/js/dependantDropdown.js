var countries = [
    {id: 1, name: "Pakistan"},
    {id: 2, name: "Saudi Arabia"},
    {id: 3, name: "USA"},
    {id: 4, name: "Behreen"},
];

var cities = [
    {id: 3, country_id: 2, name: "Riyad"},
    {id: 1, country_id: 1, name: "Lahore"},
    {id: 1, country_id: 2, name: "Makka"},
    {id: 1, country_id: 3, name: "Mexico"},
];

var i;
var countryList = document.getElementById("country_list");
for(i = 0; i < countries.length; i++){
    countryList.innerHTML += `<option value=${countries[i].id}> ${countries[i].name} </option>`
}

function print(){
    var countryId = document.getElementById("country_list").value;
    var cityList = document.getElementById("city_list");
    // console.log(countryName);
    for(var j = 0; j < cities.length; j++){
        if(countryId == cities[j].country_id){
            cityList.innerHTML += 
            `<option value=${cities[j].id}> 
                ${cities[j].name}     
            </option>`
        }
    }
} 