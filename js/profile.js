function loadCookie() {
  let username = getCookie("username");
  let email = getCookie("email");
  let contactNumber = getCookie("contactNumber");
  let gender = getCookie("gender");
  let dob = getCookie("dob");

  // Get all the cookies and set to form
  document.getElementById("username").value = username;
  document.getElementById("email").value = email;
  document.getElementById("contactNumber").value = contactNumber;
  document.getElementById("gender").value = gender;
  if (gender == "male") {
    document.getElementsByClassName("genderRadioButton")[0].checked = true;
  } else {
    document.getElementsByClassName("genderRadioButton")[1].checked = true;
  }
  document.getElementById("dob").value = dob;
}

function saveToCookie(field, value) {
  document.cookie = field + "=" + value + ";";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function validatePassword() {
  let password = getCookie("password");
  let userEnteredPassword = document.getElementById("password").value;
  let userEnteredNewPassword = document.getElementById("newPassword").value;
  let userEnteredConfirmPassword =
    document.getElementById("confirmPassword").value;
  if (password == userEnteredPassword) {
    if (userEnteredNewPassword == userEnteredConfirmPassword) {
      if (validatePassword(userEnteredNewPassword)) {
        saveCookie(userEnteredNewPassword);
        alert("Password changed");
        return true;
      } else {
        alert(
          "Password is not valid, your password must contain at least 1 number, symbol, upper case and lower case alphabet with at least 6 characters"
        );
      }
    } else {
      alert("Passwords do not match");
    }
  } else {
    return false;
  }
}

function updateUserInfo() {
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let gender = "";

  if (document.getElementsByClassName("genderRadioButton")[0].checked) {
    gender = "male";
  } else if (document.getElementsByClassName("genderRadioButton")[1].checked) {
    gender = "female";
  } else {
    alert("Please select a gender!");
    return;
  }

  let dob = document.getElementById("dob").value;

  saveToCookie("username", userName);
  saveToCookie("email", email);
  saveToCookie("contactNumber", contactNumber);
  saveToCookie("gender", gender);
  saveToCookie("dob", dob);

  console.log(userName + email + contactNumber + gender + dob);
}

// Check is user login
function checkLogin() {
  let isLoggedIn = getCookie("isLoggedIn");
  if (isLoggedIn != "true") {
    alert("Please Sign Up!");
    window.location.replace("./signUp.html");
  }
}

checkLogin();
