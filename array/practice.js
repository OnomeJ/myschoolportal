var cart = [];
var quantity = [];

function addItems() {
    document.getElementById("inp");
    document.getElementById("Quantity");

    if (inp.value === "" || Quantity.value === "") {
        alert("Fill in both item and quantity.");
    } else {
        console.log(inp.value);
        cart.push(inp.value);
        quantity.push(Quantity.value);

        inp.value = "";
        Quantity.value = "";

        displayCart();
    }
}

function displayCart() {
    var show = document.getElementById("show");
    show.innerHTML = "";
    var table = "<table><tr><th>S/N</th><th>Item</th><th>Quantity</th></tr>";

    for (var i = 0; i < cart.length; i++) {
        table += `<tr>
                    <td>${i + 1}</td>
                    <td>${cart[i]}</td>
                    <td>${quantity[i]}</td>
                    <td>
                        <button class="btn btn-dark mx-2 my-2" onclick="edit(${i})">Edit</button>
                        <button class="btn btn-primary mx-2 my-2" onclick="del(${i})">Delete</button>
                    </td>
                </tr>`;
    }

    table += "</table>";
    show.innerHTML = table;
}

function edit(index) {
    // Implement the edit functionality as per your requirements
    // You can use prompt or input fields to get the new values
}

function del(index) {
    cart.splice(index, 1);
    quantity.splice(index, 1);
    displayCart();
}
