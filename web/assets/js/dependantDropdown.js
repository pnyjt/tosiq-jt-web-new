const countries = [
    {id: 1, name: "Pakistan"},
    {id: 2, name: "Saudi Arabia"},
    {id: 3, name: "USA"},
    {id: 4, name: "Behreen"},
];

const cities = [
    {id: 3, country_id: 2, name: "Riyad"},
    {id: 1, country_id: 1, name: "Lahore"},
    {id: 1, country_id: 2, name: "Makka"},
    {id: 1, country_id: 3, name: "Mexico"},
];

let i;
let countryList = document.getElementById("country_list");

countries.forEach((country)=>{
    countryList.innerHTML += `<option value='${country.id}'> ${country.name} </option>`
});

function printData(){
    
    let countryId = document.getElementById("country_list").value;
    let cityList = document.getElementById("city_list");

    cityList.innerHTML = "";
    cities.forEach((city)=>{
        if (countryId == city.country_id) {
            cityList.innerHTML += `<option value='${city.id}'> ${city.name} </option>`
        }
    });
}