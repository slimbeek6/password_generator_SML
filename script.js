// Assignment Code
var generateBtn = document.querySelector("#generate");



// Create variables
var passwordLength = 0;
var password = "";
var incLower = false;
var incUpper = false;
var incNumber = false;
var incSpecial = false;

// Create arrays
var LowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var NumberArray = [0,1,2,3,4,5,6,7,8,9];
var SpecialArray = ["!","@","#","$","%","^","&","*","(",")"];
var masterArray = [];

// Start function and get User Inputs
function generatePassword() {
passwordLength = prompt("How long would you like your password to be?  \n Enter an integer between 8 and 128");

  // Check for non-numerical entry
  var letterCheck = LowerArray.includes(passwordLength.toLowerCase());
  var specialCheck = SpecialArray.includes(passwordLength);

  console.log(letterCheck);
  console.log(specialCheck);

  // Check password length is in the right range
  if (passwordLength >= 8 && passwordLength <= 128 && letterCheck === false && specialCheck === false) {
    console.log(passwordLength);
  }
  else {
    alert("Invalid input, please choose a number between 8 and 128");
    var passwordLength = prompt("How long would you like your password to be? \n Enter an integer between 8 and 128");
  }

  if (passwordLength >= 8 && passwordLength <= 128 && letterCheck === false && specialCheck === false) {
    console.log(passwordLength);
  }
  else {
    alert("Invalid input, please choose a number between 8 and 128");
    return "User Error";  
  }

  incLower = confirm("Would you like the password to include lower case letters?");
  incUpper = confirm("Would you like the password to include upper case letters?");
  incNumber = confirm("Would you like the password to include numbers?");
  incSpecial = confirm("Would you like the password to include special characters?");

 // Check something is chosen
  if (incLower === false && incNumber === false && incUpper === false && incNumber === false) {
    alert("Invalid input, please choose at least one character type.");
    incLower = confirm("Would you like the password to include lower case letters?");
    incUpper = confirm("Would you like the password to include upper case letters?");
    incNumber = confirm("Would you like the password to include numbers?");
    incSpecial = confirm("Would you like the password to include special characters?");
  }

 // Create the master array

  if (incLower === true) {
    for (i = 0; i < LowerArray.length; i++) {
      masterArray.push(LowerArray[i]);
    }
  }
  
  if (incUpper === true) {
    for (i = 0; i < UpperArray.length; i++) {
      masterArray.push(UpperArray[i]);
    }
  }
  
  if (incNumber === true) {
    for (i = 0; i < NumberArray.length; i++) {
      masterArray.push(NumberArray[i]);
    }
  }
  
  if (incSpecial === true) {
    for (i = 0; i < SpecialArray.length; i++) {
      masterArray.push(SpecialArray[i]);
    }
  }
  
  // Readout check on the master array
  console.log(masterArray);
  
  // Create a password from the master array

    for (i=0; i < passwordLength; i++) {
      var num = Math.floor(Math.random()*masterArray.length);
      password = password + masterArray[num];
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

