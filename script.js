// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables
var passwordLength = 0;
var passwordOutput ="";
var incLower = false;
var incUpper = false;
var incNumber = false;
var incSpecial = false;

// Create arrays
var LowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var NumberArray = [0,1,2,3,4,5,6,7,8,9];
var SpecialArray = ["!","@","#","$","%","^","&","*","(",")"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
