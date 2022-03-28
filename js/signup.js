function signup() {
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
      alert("Password is not valid, your password must contain at least 1 number, symbol, upper case and lower case alphabet with at least 6 charaters");
    } else {
      saveCookie(username, password);
    }
  }
}

function saveCookie(username, password) {
  // Add user info to the cookie
  document.cookie = "username=" + username + ";";
  document.cookie = "password=" + password + ";";
  
  alert("User created");
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(password);
}
