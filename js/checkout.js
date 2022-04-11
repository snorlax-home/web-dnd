function deliveryMethod(selected){
    switch (selected.value){
        case "standard":
            document.getElementById("shippingAmount").innerHTML = "FREE";
            document.getElementById("shippingAmount").style.color = "#FF740F";
            break;
        case "express":
            document.getElementById("shippingAmount").innerHTML = "RM20.00";
            document.getElementById("shippingAmount").style.color = "#00000091";
            break;
    }
}
