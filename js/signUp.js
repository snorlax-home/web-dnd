3function signUp() {
  // Get the user's input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Check if the passwords match
  if (password != confirmPassword) {
    alert("Passwords do not match");
  } else {
    // Check if the password is valid
    if (!validatePassword(password)) {
      alert(
        "Password is not valid, your password must contain at least 1 number, symbol, upper case and lower case alphabet with at least 6 characters"
      );
    } else {
      saveCookie(username, password);
      login();
    }
  }
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

function saveCookie(username, password) {
  // Add user info to the cookie
  document.cookie = "username=" + username + ";";
  document.cookie = "password=" + password + ";";
  document.cookie = "isLoggedIn=true;";
  console.log("User Created!");
}

function login() {
  window.location.href = "../index.html";
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(password);
}

function checkLogin() {
  if (getCookie("isLoggedIn") == "true") {
    window.location.href = "../index.html";
  }
}

checkLogin();
