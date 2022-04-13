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

function playAudio(){
    var audio = document.getElementById("alertSFX");
    audio.play();
}

function validateForm(){
    if(document.shippingForm.fname.value == "") {
        document.shippingForm.fname.focus() ;
        return false;
    }

    if(document.shippingForm.lname.value == "") {
        document.shippingForm.lname.focus() ;
        return false;
    }

    if(document.shippingForm.address-line1.value == "") {
        document.shippingForm.address-line1.focus() ;
        return false;
    }

    if(document.shippingForm.city.value == "") {
        document.shippingForm.city.focus() ;
        return false;
    }

    const zipcodeFormat = /^[0-9]$/;

    if(document.shippingForm.zipcode.value == "") {
        document.shippingForm.zipcode.focus() ;
        return false;
    } else if (zipcodeFormat.test(document.shippingForm.zipcode.value) == false) {
        document.shippingForm.zipcode.focus() ;
        return false;
    }

    const correctPhoneFormat = /^\d{10}$/;

    if(document.shippingForm.phone.value == "") {
        document.shippingForm.phone.focus() ;
        return false;
    } else if(correctPhoneFormat.test(document.shippingForm.phone.value) == false) {
        return false;
    }

    const correctEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(document.shippingForm.email.value == "") {
        document.shippingForm.email.focus() ;
        return false;
    }  else if (correctEmailFormat.test(document.shippingForm.email.value) == false){
        return false;
    }

    if(document.shippingForm.confirmation.checked == false) {
        document.shippingForm.confirmation.focus() ;
        return false;
    }

    //replace this and test this
    window.location.href = ".html";
}