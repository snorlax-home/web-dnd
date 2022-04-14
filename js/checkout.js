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
    var flag = true;
    const zipcodeFormat = /^[0-9]{5}$/;
    const correctPhoneFormat = /[0-9]{3}-[0-9]{7}$/;
    const correctEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(document.forms["shippingForm"]["fname"].value == "") {
        alert("Please enter your first name!");
        flag = false;
    } else if (document.forms["shippingForm"]["lname"].value == "") {
        alert("Please enter your last name!");
        flag = false;
    } else if(document.forms["shippingForm"]["address-line1"].value == "") {
        alert("Please enter your address!");
        flag = false;
    } else if(document.forms["shippingForm"]["city"].value == "") {
        alert("Please enter your city!");
        flag = false;
    } else if(document.forms["shippingForm"]["zipcode"].value == "") {
        alert("Please enter your zipcode!");
        flag = false;
    } else if (zipcodeFormat.test(document.forms["shippingForm"]["zipcode"].value) == false) {
        alert("Please enter a valid zipcode!");
        flag = false;
    } else if(document.forms["shippingForm"]["phone"].value == "") {
        alert("Please enter your phone number!");
        flag = false;
    } else if(correctPhoneFormat.test(document.forms["shippingForm"]["phone"].value) == false) {
        alert("Please enter a valid phone number!");
        flag = false;
    } else if(document.forms["shippingForm"]["email"].value == "") {
        alert("Please enter your email!");
        flag = false;
    }  else if (correctEmailFormat.test(document.forms["shippingForm"]["email"].value) == false){
        alert("Please enter a valid email!");
        flag = false;
    } else if (document.forms["shippingForm"]["confirmation"].checked == false) {
        alert("Please check the box to proceed!");
        flag = false;
    }

    if (flag == true) {
        setTimeout(function() {window.location = "payment.html" });
    } else {
        return flag;
    }
}
