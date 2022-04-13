function deliveryMethod(selected){
    switch (selected.value){
        case "standard":
            document.getElementById("shippingAmount").innerHTML = "FREE";
            document.getElementById("shippingAmount").style.color = "#FF740F";
            calc();
            break;
        case "express":
            document.getElementById("shippingAmount").innerHTML = "RM20.00";
            document.getElementById("shippingAmount").style.color = "#000000";
            calc();
            break;
    }
}

function calcItemSubtotal(){
    var price = document.getElementsByClassName("price");
    var subtotal = 0;

    for (var i = 0; i < price.length; i++) {
        subtotal += parseFloat(price[i].innerText);
    }

    document.getElementById("itemSubtotal").innerHTML = subtotal.toFixed(2);
}


function calcTax() {
    var total = document.getElementById("itemSubtotal").innerHTML;
    var tax = (total * 0.06).toFixed(2);
    document.getElementById("taxAmount").innerHTML = tax;
}

function calcTotal() {
    var total = document.getElementById("itemSubtotal").innerHTML;
    var tax = document.getElementById("taxAmount").innerHTML;
    var shipping = 0;
    var shippingMethod = document.getElementById("shippingAmount").innerHTML; 
    switch (shippingMethod) {
        case "FREE":
            shipping = 0;
            break;
        case "RM20.00":
            shipping = 20;
            break;
    }
    var totalAmount = (parseFloat(total) + parseFloat(tax) + parseFloat(shipping)).toFixed(2);
    document.getElementById("totalAmount").innerHTML = "RM" + totalAmount;
}

function removeItems(event){
    var element = event.target.parentNode.parentNode;
    element.remove();
    calc();
}

function calc(){
    calcItemSubtotal();
    calcTax();
    calcTotal();
}