
const roles = [
    {name: "Super admin"},
    {name: "Admin"},
    {name: "Vendor"},
    {name: "User"}
];
export const commonData =  (req, res) => {
    return res.send({status: 200, data: roles});
}