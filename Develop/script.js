// Assignment code here
var randomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var generatePassword = function () {
    // obtains password criteria and forces at least one character type to be chosen
    while (1) {
      var lowercase = window.confirm("Would you like lowercase letters in your password?");
      var uppercase = window.confirm("Would you like uppercase letters in your password?");
      var numeric = window.confirm("Would you like numbers in your password?");
      var special = window.confirm("Would you like special characters in your password?");

      if (lowercase || uppercase || numeric || special) {
        break;
      }
    }
    // forces length to be chosen
    while (1) {
      var passwordLength = parseInt(window.prompt("how long would you like your password to be? choose a length between 8 and 128."));
      if (passwordLength >= 8 && passwordLength <= 128) {
        break;
      }
    }
    // length of generated password
    var genLength = 0;
    // password in generatePassword()
    var genPass = "";
    while (genLength < passwordLength) {
      if (lowercase && genLength < passwordLength) {
        genPass += String.fromCharCode(randomNum(97, 122));
        genLength++;
      }
      if (uppercase && genLength < passwordLength) {
        genPass += String.fromCharCode(randomNum(65, 90));
        genLength++;
      }
      if (numeric && genLength < passwordLength) {
        genPass += String.fromCharCode(randomNum(48, 57));
        genLength++;
      }
      if (special && genLength < passwordLength) {
        var specGroup = randomNum(0, 3);
        if (specGroup == 0) {
          genPass += String.fromCharCode(randomNum(32, 47));
          genLength++;
        } else if (specGroup == 1) {
          genPass += String.fromCharCode(randomNum(58, 64));
          genLength++;
        } else if (specGroup == 2) {
          genPass += String.fromCharCode(randomNum(91, 96));
          genLength++;
        } else if (specGroup == 3) {
          genPass += String.fromCharCode(randomNum(123, 126));
          genLength++;
        }
      }
    }
      return genPass;
    }

    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);