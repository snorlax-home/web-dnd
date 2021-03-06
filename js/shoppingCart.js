function calcTotalPrice(event) {
  var quantity = event.target.parentNode.children[1];
  var totalPrice = event.target.parentNode.parentNode.parentNode.children[5];
  var price =
    event.target.parentNode.parentNode.parentNode.children[3].innerText;
  price = price.substr(2);
  totalPrice.innerHTML =
    "RM" + (parseInt(quantity.value) * parseFloat(price)).toFixed(2);
}

function decrement(event) {
  var quantity = event.target.parentNode.children[1];

  if (quantity.value >= 1) {
    quantity.value--;
  }

  calcTotalPrice(event);
  calcFinalPrice();
}

function increment(event) {
  event.target.parentNode.children[1].value++;

  calcTotalPrice(event);
  calcFinalPrice();
}

function checkMainCheckBox() {
  var mainCheckBox = document.getElementById("main_checkbox");
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");

  if (checkBox1 != null) {
    if (checkBox1.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  if (checkBox2 != null) {
    if (checkBox2.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  if (checkBox3 != null) {
    if (checkBox3.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  if (checkBox2 != null && checkBox3 != null) {
    if (checkBox2.checked && checkBox3.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  if (checkBox1 != null && checkBox3 != null) {
    if (checkBox1.checked && checkBox3.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  if (checkBox1 != null && checkBox2 != null) {
    if (checkBox1.checked && checkBox2.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  if (checkBox1 != null && checkBox2 != null && checkBox3 != null) {
    if (checkBox1.checked && checkBox2.checked && checkBox3.checked) {
      mainCheckBox.checked = true;
    } else {
      mainCheckBox.checked = false;
    }
  }

  calcTotalItems();
  calcFinalPrice();
}

function checkAllCheckBox(event) {
  var mainCheckBox = event.target;
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");
  if (mainCheckBox.checked) {
    if (checkBox1 != null) {
      checkBox1.checked = true;
    }

    if (checkBox2 != null) {
      checkBox2.checked = true;
    }

    if (checkBox3 != null) {
      checkBox3.checked = true;
    }
  } else {
    if (checkBox1 != null) {
      checkBox1.checked = false;
    }

    if (checkBox2 != null) {
      checkBox2.checked = false;
    }

    if (checkBox3 != null) {
      checkBox3.checked = false;
    }
  }
  calcTotalItems();
  calcFinalPrice();
}

function calcFinalPrice() {
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");

  if (checkBox1 != null) {
    var price1 = document.getElementById("Total_Price1").innerText;
    price1 = price1.substr(2);
  }

  if (checkBox2 != null) {
    var price2 = document.getElementById("Total_Price2").innerText;
    price2 = price2.substr(2);
  }

  if (checkBox3 != null) {
    var price3 = document.getElementById("Total_Price3").innerText;
    price3 = price3.substr(2);
  }

  var finalPrice = 0;
  var finalPriceHTML = document.getElementById("Final_Price");

  if (checkBox1 != null) {
    if (checkBox1.checked) {
      finalPrice += parseFloat(price1);
    }
  }

  if (checkBox2 != null) {
    if (checkBox2.checked) {
      finalPrice += parseFloat(price2);
    }
  }

  if (checkBox3 != null) {
    if (checkBox3.checked) {
      finalPrice += parseFloat(price3);
    }
  }

  finalPriceHTML.innerHTML = "RM" + finalPrice.toFixed(2);
}

function calcTotalItems() {
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");
  var totalItems = document.getElementById("total_items");
  var total = 0;

  if (checkBox1 != null) {
    if (checkBox1.checked) {
      total += 1;
    }
  }

  if (checkBox2 != null) {
    if (checkBox2.checked) {
      total += 1;
    }
  }

  if (checkBox3 != null) {
    if (checkBox3.checked) {
      total += 1;
    }
  }

  if (total <= 1) {
    totalItems.innerHTML = "Total (" + total + " item):";
  } else {
    totalItems.innerHTML = "Total (" + total + " items):";
  }
}

function deleteItemsFromCart(event) {
  var element = event.target.parentNode.parentNode.parentNode.parentNode;
  element.remove();
}

function checkItem() {
  var checkBox1 = document.getElementById("check1");
  var checkBox2 = document.getElementById("check2");
  var checkBox3 = document.getElementById("check3");

  if (checkBox1 != null && checkBox2 == null && checkBox3 == null) {
    if (!checkBox1.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }

  if (checkBox1 == null && checkBox2 != null && checkBox3 == null) {
    if (!checkBox2.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }

  if (checkBox1 == null && checkBox2 == null && checkBox3 != null) {
    if (!checkBox3.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }

  if (checkBox1 != null && checkBox2 != null && checkBox3 == null) {
    if (!checkBox1.checked && !checkBox2.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }

  if (checkBox1 != null && checkBox2 == null && checkBox3 != null) {
    if (!checkBox1.checked && !checkBox3.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }

  if (checkBox1 == null && checkBox2 != null && checkBox3 != null) {
    if (!checkBox2.checked && !checkBox3.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }

  if (checkBox1 != null && checkBox2 != null && checkBox3 != null) {
    if (!checkBox1.checked && !checkBox2.checked && !checkBox3.checked) {
      alert("You have not selected any items for checkout");
    } else {
      location.replace("checkout.html");
    }
  }
}
