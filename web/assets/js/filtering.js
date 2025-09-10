const users = [
    { id: 1, name: "Adil", role: "admin" },
    { id: 2, name: "Usman", role: "user" },
    { id: 3, name: "John", role: "vendor" },
    { id: 4, name: "Clark kent", role: "user" },
    { id: 5, name: "Alice", role: "admin" },
    { id: 6, name: "Yousaf", role: "vendor" },
    { id: 7, name: "Ibrahim", role: "vendor" },
];

let userRole = "vendor";

function check (users) {
    if (users.role == userRole) {
        return users;
    }
}
// let result = users.filter(check);
let result = users.find(check);
console.log(result);

let arr = ["Fruits", "Foods", "Sports", "Events"]
arr.splice(1, 0, "Lahore", "Karachi", "Faisalabad");
console.log(arr);
let arr2 = ["Phone case", "USB drive", "Ram"];
console.log([...arr, ...arr2]);

let myArray = [2,3,4,5,6,7,8,9];
let output = users.map( (element) => { return element } );
console.log(output);
