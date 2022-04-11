function deliveryMethod(){
    var deliveryMethod = document.querySelectorAll("delivery-method").value;
    switch (deliveryMethod){
        case 'standard':
            document.getElementById("shippingAmount").innerHTML = "FREE";
            break;
        case 'express':
            document.getElementById("shippingAmount").innerHTML = "RM20.00";
            break;
    }
}

// https://stackoverflow.com/questions/8838648/onchange-event-handler-for-radio-button-input-type-radio-doesnt-work-as-one