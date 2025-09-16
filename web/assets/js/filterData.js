const users = [
    {id: 101, firstName: "Ali", lastName: "Usman", email: "ali@mail.com"},
    {id: 102, firstName: "John", lastName: "Alex", email: "john@mail.com"},
];

$(document).ready(function(){

    showData();
    function showData(){
        users.forEach((user, i) => {
            $("#myTable").append(`
                <tr>
                    <td> ${user.id} </td>
                    <td> ${user.firstName} </td>
                    <td> ${user.lastName} </td>
                    <td> ${user.email} </td>
                </tr>
                `)
        })
    }

    $("#myInput").on("input", function (){
        let value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function (){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })
})