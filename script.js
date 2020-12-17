// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables
var passwordLength = 0;
var password ="";
var incLower = false;
var incUpper = false;
var incNumber = false;
var incSpecial = false;





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
