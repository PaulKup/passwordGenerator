// Assignment code here
var randomNum = function (min, max) {
  return Math.random() * (max - min) + min;
}

var generatePassword = function () {
  while (1) {
    var lowercase = window.confirm("Would you like lowercase letters in your password?");
    var uppercase = window.confirm("Would you like uppercase letters in your password?");
    var numeric = window.confirm("Would you like numbers in your password?");
    var special = window.confirm("Would you like special characters in your password?");

    if (lowercase || uppercase || numeric || special) {
      break;
    }
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = 'password';
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);