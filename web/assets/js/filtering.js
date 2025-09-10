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
let result = users.filter(check);
console.log(result);

