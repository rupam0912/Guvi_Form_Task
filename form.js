function tableFunc() {
    var name = document.forms["myForm"]["inputName"].value;
    var email = document.forms["myForm"]["inputEmail"].value;
    var age = document.forms["myForm"]["inputAge"].value;

    if (name != "" || email != "" || age != "") {
        var tableRef = document.getElementById('myTable')

        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow(1);

        // Insert a cell in the row at index 0
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);

        // Append a text node to the cell
        newCell1.innerHTML = name;
        newCell2.innerHTML = email;
        newCell3.innerHTML = age;
    }
    document.getElementById("myForm").reset();

}