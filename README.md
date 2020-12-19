# Password Generator App

## Summary
The ask for this was to create a web based application that creates random passwords based on the user's desired character types and password length.  This was accomplished using a number of javascript functions, to record the user's preferences, then apply those settings within another function to generate a password only from the types of characters that they chose, and up to the length of password they desire.

If the user repeatedly enters an invalid password length or a null set of character types, then the program returns an error message and resets.


<hr>

## Example of Output
![Picture of Website](./Assets/pic-of-site.png)

## Pseudo Code & Key Code Elements

The main steps that were taken to build the page to run as it does break down as so:

**Initial Setup**
* Create the backbone arrays with all of the different types of characters you would like to define, as well as a Master Array that will be used to append all of the user selected character types into a single array.
```
var NumberArray = [0,1,2,3,4,5,6,7,8,9];

var masterArray = [];
```
* Define key background variables, including password length, boolean variables about whether to include different character types, and the final output password.
```
var passwordLength = 0;
var password = "";
var incLower = false;
var incUpper = false;
var incNumber = false;
var incSpecial = false;
```

**User Input Stage**
* Create a function that ties to the function loaded into the button's event listener for a click.
* In this function, create the user input module by first creating a prompt that asks the user for their desired password length, between the numbers of 8 and 128.
* If the user inputs anything other than a number between 8 and 128, return an alert and a new prompt that tells them to adhere to the rules.
* If the user still inputs a non-valid password length, end the function.
```
function generatePassword() {
passwordLength = prompt("How long would you like your password to be?  \n Enter an integer between 8 and 128");

  // Check for non-numerical entry
  var letterCheck = LowerArray.includes(passwordLength.toLowerCase());
  var specialCheck = SpecialArray.includes(passwordLength);


  // Check password length is in the right range
  if (passwordLength >= 8 || passwordLength <= 128 && letterCheck === false && specialCheck === false) {
    console.log(passwordLength);
  }
  else {
    alert("Invalid input, please choose a number between 8 and 128");
    var passwordLength = prompt("How long would you like your password to be? \n Enter an integer between 8 and 128");
  }
```

* If the user enters a valid password length, present them with a series of confirm commands asking them what character types they would like to include, and assign these to your previously defined intermediary variables like incLower.
```
incLower = confirm("Would you like the password to include lower case letters?");
```

**Master Array Creation**

Using the newly defined boolean variables, create a master array from the arrays with true booleans. Do this with if statements and appends. Create four different versions of the below to iterate through each character array that the user has selected to append this information to the Master Array.

```
if (incLower === true) {
    for (i = 0; i < LowerArray.length; i++) {
      masterArray.push(LowerArray[i]);
    }
  }
```
**Final Password Creation & Output**

Finally to create the desired random password, use a loop to create random numbers to use as the index to select random characters from the newly created Master Array. Run this loop, adding each character to the output password, until the password has reached the length desired by the user.

```
    for (i=0; i < passwordLength; i++) {
      var num = Math.floor(Math.random()*masterArray.length);
      password = password + masterArray[num];
    }
```

Once this is done, return this information, and ensure that the function is closed and properly referenced to tie to the meta text in the password generation box on the main page.

```
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

```



<hr>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-us/docs/web/javascript)

## Deployed Link

* [See Live Site](https://slimbeek6.github.io/password_generator_SML/)


## Authors

**Shaun Limbeek** 
- [Link to Portfolio](https://slimbeek6.github.io/SML_Portfolio/index.html)
- [Link to Github](https://github.com/slimbeek6/)
- [Link to LinkedIn](https://www.linkedin.com/in/shaun-limbeek/)